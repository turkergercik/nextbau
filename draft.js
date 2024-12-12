
import React from 'react'
import { createClient } from 'contentful'
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
const sid="h7ad3r48qk3t"
const at ="qvYt_tcie5ni9ozEnmc4QQJuLSy2k-nvA6hDaiZY2YE"
async function Page() {
    let data = null
    try {
       const res = createClient({
            space:sid,
            accessToken:at
         })
      const res1= await res.getEntries({content_type:"blog"})
      console.log(res1.items[0].fields)
      data = res1.items[0].fields
    } catch (error) {
        
    }
   
    const options = {
        renderNode: {
          // Customize paragraphs
          [BLOCKS.PARAGRAPH]: (node, children) => (
            <p className="text-center text-gray-700 text-lg my-4">{children}</p>
          ),
          
          // Customize headings
          [BLOCKS.HEADING_1]: (node, children) => (
            <h1 className="text-4xl font-bold text-blue-800 text-center  my-6">{children}</h1>
          ),
          
          [BLOCKS.HEADING_2]: (node, children) => (
            <h2 className="text-3xl font-semibold text-blue-600 text-left my-4">{children}</h2>
          ),
          
          // Customize hyperlinks
          [INLINES.HYPERLINK]: (node, children) => (
            <a
              href={node.data.uri}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700"
            >
              {children}
            </a>
          ),
          
          // Customize images
          [BLOCKS.EMBEDDED_ASSET]: (node) => (
            <div className="flex justify-center my-4">
              <img
                src={node.data.target.fields.file.url}
                alt={node.data.target.fields.title}
                className="rounded-lg shadow-lg max-w-full"
              />
            </div>
          ),
        },
      };

   

  return (
    <div className='flex justify-center items-center flex-col'>{data.title}
    <img className='w-1/2' src={data.thumbnail.fields.file.url}></img>
    <div className="px-4 w-full">{documentToReactComponents(data.description, options)}</div>
    </div>
  )
}

export default Page