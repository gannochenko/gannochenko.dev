          - label: Widget
            name: widget
            widget: select
            options:
                - { label: 'Standard', value: 'StandardBlock' }
                - { label: 'Accent', value: 'AccentBlock' }
                - { label: 'Quote', value: 'QuoteBlock' }
            required: false
          - name: effect
            label: Effect
            widget: select
            options:
                - { label: 'Fade+Slide-in to left', value: 'fade-slide-left' }
                - { label: 'Fade+Slide-in to right', value: 'fade-slide-right' }
                - { label: 'Fade+Slide-in to top', value: 'fade-slide-top' }
                - {
                      label: 'Fade+Slide-in to bottom',
                      value: 'fade-slide-bottom',
                  }
            required: false
          - name: effectTimeout
            label: Effect timeout
            widget: number
            valueType: int
            default: 0
          - label: Font size
            name: fontSize
            widget: select
            options:
                - { label: 'Small', value: 'small' }
                - { label: 'Standard', value: 'standard' }
                - { label: 'Medium', value: 'medium' }
                - { label: 'Large', value: 'large' }
            default: standard
            required: false
          - label: Width
            name: width
            widget: string
            default: auto
            required: false




Lalala

[BLOCK effect=fade-slide-left timeout=3000 font-size=medium width=100%]
My name is Sergei, I am a full-stack software engineer in the JavaScript domain with 10+ years of development experience. I have a Master’s in Math. I am a passionate learner, in deep love with what I do for a living.
[/BLOCK]

[BLOCK]
I was born in Russia and right now I live in Berlin, Germany. I love travelling and architecture. And other kinds of stuff.
Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
[/BLOCK]

[BLOCK effect=fade-slide-right timeout=1000 font-size=large width=50%]
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
[/BLOCK]

[BLOCK]
type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
If you are interested in a <a href="">full story, here it is</a> :)
[/BLOCK]

Lololol!!!


        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.app/offline
        // 'gatsby-plugin-offline',
        
        
                // {
                //     resolve: 'gatsby-plugin-manifest',
                //     options: {
                //         name: 'gatsby-starter-default',
                //         short_name: 'starter',
                //         start_url: '/',
                //         background_color: '#663399',
                //         theme_color: '#663399',
                //         display: 'minimal-ui',
                //         // icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
                //     },
                // },
