import type { CodegenConfig } from "@graphql-codegen/cli";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lb3N3dHN3bW94ZXpma2hndXhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk1NzMzNzEsImV4cCI6MjA0NTE0OTM3MX0.dRo5q7F0n8v1vAcsI1020vbtjttqfJBkU2p3ek4Nlr4";
const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      "https://meoswtswmoxezfkhguxl.supabase.co/graphql/v1": {
        headers: {
          apikey: API_KEY,
          "Content-type": "application/json",
        },
      },
    },
  ],
  documents: "app/graphql/**/*.graphql",
  generates: {
    "app/gql/": {
      preset: "client",
      config: {
        avoidOptionals: {
          defaultValue: false,
          field: true,
          object: false,
          inputValue: false,
        },
      },
    },
  },
};

export default config;
