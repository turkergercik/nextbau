import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
    cloud_name: "dmsxjpsxd",
    api_key: "662865874342974",
    api_secret: "T_O0qP_NYkMUa-kRhbCwKDAGCO0",
    secure:true,
    sdk_semver: "2.0.0",

});


export async function GET(request) {
    let response = [];

    try {
        // Get all root folders
        const folders = await cloudinary.api.root_folders();

        if (!folders.folders || folders.folders.length === 0) {
            throw new Error("No folders found in the Cloudinary account.");
        }

        // Use a `for...of` loop to handle async operations
        for (const folder of folders.folders) {
            // Fetch resources for the folder
            const result = await cloudinary.api.resources_by_asset_folder(folder.path, {
                max_results: 100,
            });

            // Transform the resources
            const res = result.resources.map((item, index) => {
                let transformedUrl=null
                if(item.resource_type==="image"){
                     transformedUrl = cloudinary.url(item.public_id, {
                        resource_type:"image",
                        transformation: [
                            { width: 500, height: 500, crop: "fill" }, // Resize transformation
                            { quality: "auto" },                      // Adjust quality automatically
                                                      // Add rounded corners
                        ],
                        format:"png", // Choose format based on type
                    });
                }else{
                     transformedUrl = cloudinary.url(item.public_id, {
                        resource_type:"video",
                        transformation: [
                            { width: 750, height: 750, crop: "fill" }, // Resize transformation
                            { quality: "auto" },                      // Adjust quality automatically
                                                  // Add rounded corners
                        ],
                        format:"mp4", // Choose format based on type
                    });
                    console.log(transformedUrl)
                }
                
                

                return {
                    id: item.public_id,
                    type:item.resource_type,
                    originalUrl: item.secure_url, // Original URL
                    transformedUrl,              // Transformed URL      // Custom name
                };
            });

            // Add folder and its resources to the response
            response.push({
                folder: folder.name,
                data: res,
            });
        }

        console.log('Resources with transformations:', response);
    } catch (error) {
        console.error('Error fetching resources:', error);
    }

    return NextResponse.json(response);
}
