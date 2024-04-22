import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'
export default function RTE({name , control , label,defaultValue = ""}) {
    return (
       <div>
        {label && <label> {label}</label> }
        <Controller
        name={name || "content"}
        control={control}
        render = { ({field: {onChange}}) => (
            <Editor
             initialValue='default value'
             init ={{
                branding:false,
                height:500,
                menubar:true,
                plugins: [
                    "image",
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "code",
                    "help",
                    "wordcount",
                    "anchor",
                  ],
                  toolbar: "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                }
            }
            onEditorChange={onChange}
            />
        )}
        />
       </div>
    )
}
