import React, { Component } from 'react';
import Header from '../../UI/Header';
import Footer from '../../UI/Footer';

class Blog extends Component {
render() {
  return (
    <div className="container">
<div className="blog-container">
  <Header />

  <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
    <div className="col-md-6 px-0">
      <h1 className="display-4 font-italic">Title of a longer featured blog post</h1>
      <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
      <p className="lead mb-0"><a href="#" className="text-white font-weight-bold">Continue reading...</a></p>
    </div>
  </div>

  <div className="row mb-2">
    <div className="col-md-6">
      <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary">World</strong>
          <h3 className="mb-0">Featured post</h3>
          <div className="mb-1 text-muted">Nov 12</div>
          <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="stretched-link">Continue reading</a>
        </div>
        
      </div>
    </div>
    <div className="col-md-6">
      <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-success">Design</strong>
          <h3 className="mb-0">Post title</h3>
          <div className="mb-1 text-muted">Nov 11</div>
          <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="stretched-link">Continue reading</a>
        </div>
        <div className="col-auto d-none d-lg-block">
          
        </div>
      </div>
    </div>
  </div>
</div>

<main role="main" className="container">
  <div className="row">
    <div className="col-md-8 blog-main">
      <h3 className="pb-4 mb-4 font-italic border-bottom">
        From the Firehose
      </h3>

      <div className="blog-post">
        <h2 className="blog-post-title">Sample blog post</h2>
        <p className="blog-post-meta">January 1, 2014 by <a href="#">Mark</a>
        </p>

        <p>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p>
        
        <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>
      </div>

      <div className="blog-post">
        <h2 className="blog-post-title">Another blog post</h2>
        <p className="blog-post-meta">December 23, 2013 by <a href="#">Jacob 
        </a></p>

        <p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
        <blockquote>
          <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
        </blockquote>
        <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      </div>

      <div className="blog-post">
        <h2 className="blog-post-title">New feature</h2>
        <p className="blog-post-meta">December 14, 2013 by <a href="#">Chris</a></p>

        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        <ul>
          <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
          <li>Donec id elit non mi porta gravida at eget metus.</li>
          <li>Nulla vitae elit libero, a pharetra augue.</li>
        </ul>
        <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
        <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
      </div>

      <nav className="blog-pagination">
        <a className="btn btn-outline-primary" href="#">Older</a>
        <a className="btn btn-outline-secondary disabled" href="#" tabindex="-1" aria-disabled="true">Newer</a>
      </nav>

    </div>

    <aside className="col-md-4 blog-sidebar">
      <div className="p-4 mb-3 bg-light rounded">
        <h4 className="font-italic">About</h4>
        <p className="mb-0">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
      </div>

      <div className="p-4">
        <h4 className="font-italic">Archives</h4>
        <ol className="list-unstyled mb-0">
          <li><a href="#">March 2014</a></li>
          <li><a href="#">February 2014</a></li>
          <li><a href="#">January 2014</a></li>
          <li><a href="#">December 2013</a></li>
          <li><a href="#">November 2013</a></li>
          <li><a href="#">October 2013</a></li>
          <li><a href="#">September 2013</a></li>
          <li><a href="#">August 2013</a></li>
          <li><a href="#">July 2013</a></li>
          <li><a href="#">June 2013</a></li>
          <li><a href="#">May 2013</a></li>
          <li><a href="#">April 2013</a></li>
        </ol>
      </div>

      <div className="p-4">
        <h4 className="font-italic">Elsewhere</h4>
        <ol className="list-unstyled">
          <li><a href="#">GitHub</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Facebook</a></li>
        </ol>
      </div>
    </aside>

  </div>

</main>


<Footer />
</div>
  )}}
export default Blog;  