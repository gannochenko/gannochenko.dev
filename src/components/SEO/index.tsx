import React, { FunctionComponent } from 'react';
import Helmet from 'react-helmet';
import { Props } from './type';
import { Query } from './query';

export const SEO: FunctionComponent<Props> = ({
    description = '',
    lang = 'en',
    meta = [],
    keywords = [],
    title = '',
    image = '',
}) => {
    return (
        <Query>
            {data => {
                const metaDescription =
                    description || data.site.siteMetadata.description;

                return (
                    <Helmet
                        htmlAttributes={{
                            lang,
                        }}
                        title={title}
                        titleTemplate={`%s | ${data.site.siteMetadata.title}`}
                        meta={[
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
                            image
                                ? {
                                      property: 'og:image',
                                      content: image,
                                  }
                                : null,
                        ]
                            .concat(
                                keywords.length > 0
                                    ? [
                                          {
                                              name: `keywords`,
                                              content: keywords.join(`, `),
                                          },
                                      ]
                                    : [],
                            )
                            .concat(meta)
                            .filter(x => !!x)}
                    />
                );
            }}
        </Query>
    );
};
