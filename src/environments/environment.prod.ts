export const environment = {
  production: true,
  credentials: {
    clientId:
      'c67e514e-c5a8-4b81-9419-6831c5bd32b8' /** TODO: we can configure this with your client id */,
    tenantId:
      '9954cd00-1370-4a0b-9f28-8db103f0b8db' /** TODO: we can configure this with tenant id */,
  },
  configuration: {
    redirectUri:
      'https//:' /** TODO: we can configure this with production URLs */,
    postLogoutRedirectUri:
      'https://' /** TODO: we can configure this with production URLs*/,
  },
  resources: {
    Graph: {
      resourceUri: `https://graph.microsoft.com/v1.0`,
      resourceScopes: [
        `User.Read`,
        `User.Read.All`,
        'People.Read.All',
        'User.ReadBasic.All',
        'Mail.Send',
        'Files.ReadWrite.All ',
        'Sites.FullControl.All',
        'Files.ReadWrite',
      ],
    },
    GraphProfile: {
      resourceUri: `https://graph.microsoft.com/beta/me/profile`,
      resourceScopes: [`User.Read`],
    },
  },
};
