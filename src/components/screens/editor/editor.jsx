
import React from "react";
import Showdown from "showdown"
import ReactMDE from 'react-mde'
import './editor.css'
import 'react-mde/lib/styles/css/react-mde-all.css';

const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
  });

const Editor = (props) => {


    const [selectedTab, setSelectedTab] = React.useState("write")

    return (

        <div className="editor">
            <ReactMDE

                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={markdown =>
                Promise.resolve(converter.makeHtml(markdown))
                }
                value = {props.currentNote.body}
                onChange={props.handleChange}
                maxEditorHeight='90'
                maxPreviewHeight='90'
                heightUnits="vh"
                style="max-height: 90vh;"
            />
        </div>

    )
}


export default Editor