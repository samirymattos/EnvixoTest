import React from "react";
import RenderHTML from "react-native-render-html";

import Style from './style';

export default function ContentHTML(props) {
  const { contentText } = props;


  // const source = {
  //   html: `${props.excerpt.rendered}`,
  // };
  
  const defaultTextProps = {
    numberOfLines: 4,
  };
  
  const ParagraphRenderer = ({ TDefaultRenderer, textProps, ...props }) => {
    return (
      <TDefaultRenderer
        {...props}
        textProps={{ ...textProps, numberOfLines: 2 }}
      />
    );
  };
  
  const renderers = {
    p: ParagraphRenderer,
  };

  return (
    <RenderHTML
      source={{html: contentText.excerpt.rendered}}
      defaultTextProps={defaultTextProps}
      renderers={renderers}
      tagsStyles={Style}
    />
  );
}
