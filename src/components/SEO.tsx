import React from "react";
import { Helmet, HelmetProps } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface Props {
  description?: string;
  lang?: string;
  meta?: HelmetProps["meta"];
  title?: string;
}

export const SEO: React.FunctionComponent<Props> = ({
  description = "",
  lang = "en",
  meta = [],
  title = "",
}) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;

  const siteTitle = title || site.siteMetadata.title;

  const basicMeta: HelmetProps["meta"] = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ];

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={siteTitle}
      titleTemplate={siteTitle}
      meta={basicMeta.concat(meta)}
    />
  );
};
