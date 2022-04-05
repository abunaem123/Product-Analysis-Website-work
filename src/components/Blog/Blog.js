import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='grid grid-cols-2  py-20'>
                <div className='m-auto'>
                    <h1 className=' text-left text-5xl px-24 '>What is Context API?</h1>
                    <p className=' text-left px-24 py-5 '>The Context API is a React structure that allows you to exchange unique details and aids in prop-drilling resolution from all levels of your application. This API addresses one major issue: prop drilling. Even if you're not familiar with the term, it's likely that you've encountered it while working on a React.js app. Prop drilling is the process of passing data from component A to component Z via multiple layers of intermediary React components. The component will receive props indirectly, and we will be responsible for ensuring that everything works properly.</p>
                </div>
                <div>
                <h1 className=' text-5xl text-left px-24'>What is simentic tag?</h1>
                    <p className='  text-left px-24 py-5'>Semantic tag is a HTML5 addresses this shortcoming by defining specific tags to indicate clearly what role is played by the content those tags contain.For example, header, Footer, article are considered semantic elements as they clearly describe their purpose and the type of content they should enclose. Semantic tags also help search engines to parse the webpage correctly and find accurate information. Thus, helping search engines to correctly index the page.</p>
                </div>
            </div>
        </div>

    );
};

    export default Blog;