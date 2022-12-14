import React from 'react'
import breadcrumb from '../../assets/img/breadcrumb-bg.jpg';

const BlogSection = () => {
  return (
<>
 <section className="breadcrumb-blog set-bg" 
  style={{ backgroundImage: `url(${breadcrumb})` }}
 data-setbg="img/">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2>Our Blog</h2>
                </div>
            </div>
        </div>
    </section>
</>  )
}

export default BlogSection