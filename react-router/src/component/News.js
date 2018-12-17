import React from 'react';

const News = ({match}) =>
    <h1>News Page: {match.params.id} </h1>;

export default News;