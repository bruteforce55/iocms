import type { Schema, Struct } from '@strapi/strapi';

export interface TextContent extends Struct.ComponentSchema {
  collectionName: 'components_text_contents';
  info: {
    displayName: 'content';
  };
  attributes: {
    heading: Schema.Attribute.String;
    texts: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'text.content': TextContent;
    }
  }
}
