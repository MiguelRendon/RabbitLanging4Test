var requestPost =  `{
                      posts(first: 10) {
                        nodes {
                          id
                          title
                          date
                          seo {
                            title
                            description
                            keywords
                          }
                        }
                      }
                    }`;