---
title: "Passwordless GitHub Auth for ArgoCD Using Workload Identity Federation"
date: 2025-08-25T00:00:00Z
readTime: "2 min read"
tags: ["DevOps", "Security", "OIDC", "Workload Identity Federation", "GitHub", "ArgoCD", "Kubernetes", "K8s"]
excerpt: "In my previous article, I explored Workload Identity Federation (WIF) and its benefits for secure authentication in cloud-native environments. WIF removes the need for long‑live..."
draft: true
---

<p class="post-badge">New article!</p>

## Table of Contents

* [Introduction](#introduction)
* [Configuring OIDC Issuer with Azure Kubernetes Service (AKS)](#configuring-oidc-issuer-with-azure-kubernetes-service-aks)

## Introduction

In my previous article, I explored Workload Identity Federation (WIF) and its benefits for secure authentication in cloud-native environments. WIF removes the need for long‑lived credentials by exchanging trusted identities for short‑lived, scoped tokens.

### What is ArgoCD?

ArgoCD is a Kubernetes‑native GitOps continuous delivery controller. It watches your Git repositories for the desired state of your applications and continuously compares that to the live state running in your clusters. When drift is detected, ArgoCD can automatically or manually reconcile to bring the cluster back in sync. Because it pulls manifests from Git, ArgoCD must authenticate to your Git provider; for private repositories this is often done with SSH deploy keys, personal access tokens, or GitHub App credentials. These are typically long‑lived secrets you would prefer not to store.

In this follow‑up article, I will put WIF into practice by configuring ArgoCD to sync Kubernetes manifests from a private GitHub repository using short‑lived, federated credentials. This lets ArgoCD authenticate to GitHub without storing sensitive, long‑lived secrets, strengthening the security of your GitOps pipeline.

### Prerequisites

* The `az`, `kubectl`, and `kubelogin` CLIs installed. The latter two can be installed using `az aks install-cli`.
* A Kubernetes cluster configured with an OIDC issuer (e.g. AKS, EKS, GKE, or a self‑managed cluster with Dex or Keycloak).
* ArgoCD installed in your Kubernetes cluster.
* A private GitHub repository containing your Kubernetes manifests.

## Configuring OIDC Issuer with Azure Kubernetes Service (AKS)

Throughout this guide, I will use Azure Kubernetes Service (AKS) as the example Kubernetes cluster. AKS has built‑in support for signing service account tokens with its OIDC issuer, making it straightforward to set up WIF with GitHub.

When creating your AKS cluster, ensure that the OIDC issuer is enabled. You can do this via the Azure CLI using the `--enable-oidc-issuer` flag:

```bash
az aks create \
  --resource-group myResourceGroup \
  --name myAKSCluster \
  --node-count 1 \
  --enable-oidc-issuer \
  --generate-ssh-keys
```

You can also enable OIDC on an existing AKS cluster using the same flag:

```bash
az aks update \
  --resource-group myResourceGroup \
  --name myAKSCluster \
  --enable-oidc-issuer
```

> [!NOTE]
> The flag `--enable-oidc-issuer` should not be confused with `--enable-workload-identity`. The latter is an [additional feature](https://azure.github.io/azure-workload-identity/docs/introduction.html) that allows AKS to easily exchange signed service account tokens for Azure AD access tokens. It's a great feature for integrating Kubernetse services with Azure services, but for this guide, we only need the OIDC issuer enabled.

## ArgoCD Git Authentication Explained

ArgoCD supports several methods for authenticating to Git repositories. For GitHub specifically, the supported methods are a PAT (personal access token), or a GitHub App. Both methods require storing long-lived credentials in ArgoCD, which we want to avoid.

ArgoCD looks for Git repository and repository template credentials in specially-labeled Kubernetes secrets within its namespace. The secrets must be of type `Opaque` and have the label `argocd.argoproj.io/secret-type: repository` or `argocd.argoproj.io/secret-type: repository-template` respectively.
