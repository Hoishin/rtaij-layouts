import React from 'react';
import Highlighter from 'react-highlight-words';

export const TweetHighlighter: React.ComponentType<{text: string}> = props => (
	<Highlighter
		searchWords={['#rtainjapan']}
		textToHighlight={props.text}
		highlightStyle={{color: '#55acee', backgroundColor: 'inherit'}}
	/>
);
