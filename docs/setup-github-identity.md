# Configure Personal GitHub Identity for This Project

Use these steps to ensure this repository always uses your personal GitHub account (`busi-reddy-karnati`) even if you have another profile on the same machine.

## 1) Set repo-local git identity

Run from project root:

```bash
git config user.name "Busi Reddy Karnati"
git config user.email "YOUR_PERSONAL_GITHUB_EMAIL"
```

Verify:

```bash
git config --local --get user.name
git config --local --get user.email
```

## 2) Create a dedicated SSH key for personal GitHub

```bash
ssh-keygen -t ed25519 -C "YOUR_PERSONAL_GITHUB_EMAIL" -f ~/.ssh/id_ed25519_github_personal
```

## 3) Add SSH config host alias

Edit `~/.ssh/config`:

```sshconfig
Host github-personal
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_github_personal
  IdentitiesOnly yes
```

## 4) Add key to SSH agent and GitHub

```bash
ssh-add --apple-use-keychain ~/.ssh/id_ed25519_github_personal
pbcopy < ~/.ssh/id_ed25519_github_personal.pub
```

Paste the copied key into:
- GitHub -> Settings -> SSH and GPG keys -> New SSH key

## 5) Point this repo remote to personal alias

```bash
git remote set-url origin git@github-personal:busi-reddy-karnati/busi-reddy-karnati.github.io.git
```

## 6) Verify active account before pushing

```bash
ssh -T git@github-personal
git remote -v
```

The SSH greeting should confirm your personal username.
