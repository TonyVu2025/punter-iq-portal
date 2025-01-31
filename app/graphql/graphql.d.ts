declare module '*.graphql' {
  import { TypedDocumentNode } from '@graphql-typed-document-node/core';
  const content: TypedDocumentNode;
  export default content;
}
