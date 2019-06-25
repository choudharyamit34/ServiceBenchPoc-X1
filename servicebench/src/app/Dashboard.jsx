import React, { Component } from 'react'
import ServiceJobListTable from '../components/serviceJob/serviceJobList/serviceJobListTable';
import SjPieChart from '../components/charts/sjChart';



import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody} from 'reactstrap';
import ClaimPieChart from '../components/charts/claimChart';
import PartsPieChart from '../components/charts/partChart.';
export default class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
  {/* <!-- Navigation --> */}
  <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container">
      <a className="navbar-brand" href="/home">Start Working ! Going to make it better</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="about.html">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="services.html">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contact.html">Contact</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Portfolio
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
              <a className="dropdown-item" href="portfolio-1-col.html">1 Column Portfolio</a>
              <a className="dropdown-item" href="portfolio-2-col.html">2 Column Portfolio</a>
              <a className="dropdown-item" href="portfolio-3-col.html">3 Column Portfolio</a>
              <a className="dropdown-item" href="portfolio-4-col.html">4 Column Portfolio</a>
              <a className="dropdown-item" href="portfolio-item.html">Single Portfolio Item</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Blog
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
              <a className="dropdown-item" href="blog-home-1.html">Blog Home 1</a>
              <a className="dropdown-item" href="blog-home-2.html">Blog Home 2</a>
              <a className="dropdown-item" href="blog-post.html">Blog Post</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Other Pages
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
              <a className="dropdown-item" href="full-width.html">Full Width Page</a>
              <a className="dropdown-item" href="sidebar.html">Sidebar Page</a>
              <a className="dropdown-item" href="faq.html">FAQ</a>
              <a className="dropdown-item" href="404.html">404</a>
              <a className="dropdown-item" href="pricing.html">Pricing Table</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <header>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner" role="listbox">
        {/* <!-- Slide One - Set the background image for this slide in the line below --> */}
        {/* <div className="carousel-item active" style="background-image: url('http://placehold.it/1900x1080')"> */}
        <div className="carousel-item active" >
          <div className="carousel-caption d-none d-md-block">
            <h3>First Slide</h3>
            <p>This is a description for the first slide.</p>
          </div>
        </div>
        {/* <!-- Slide Two - Set the background image for this slide in the line below --> */}
        {/* <div className="carousel-item" style="background-image: url('http://placehold.it/1900x1080')"> */}
        <div className="carousel-item" >
          <div className="carousel-caption d-none d-md-block">
            <h3>Second Slide</h3>
            <p>This is a description for the second slide.</p>
          </div>
        </div>
        {/* <!-- Slide Three - Set the background image for this slide in the line below --> */}
        {/* <div className="carousel-item" style="background-image: url('http://placehold.it/1900x1080')"> */}
        <div className="carousel-item" >
          <div className="carousel-caption d-none d-md-block">
            <h3>Third Slide</h3>
            <p>This is a description for the third slide.</p>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  </header>

  {/* <!-- Page Content --> */}
  <div className="container">

    <h1 className="my-4">Welcome to Service Bench</h1>

    {/* <!-- Marketing Icons Section --> */}
    <div className="row">
      <div className="col-lg-4 mb-4">
        <div className="card h-100">
          <h4 className="card-header">Service Jobs</h4>          
          <CardColumns>
                 <SjPieChart />
           </CardColumns>          
          <div className="card-footer">
            <a href="/serviceJobs" className="btn btn-primary">Show More</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 mb-4">
        <div className="card h-100">
          <h4 className="card-header">Claims</h4>
          <CardColumns>
                 <ClaimPieChart />
           </CardColumns>
          <div className="card-footer">
            <a href="/claims" className="btn btn-primary">Show More</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 mb-4">
        <div className="card h-100">
          <h4 className="card-header">Parts</h4>                    
          <CardColumns>
                 <PartsPieChart />
           </CardColumns>      
          <div className="card-footer">
            <a href="/serviceJobs" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- /.row --> */}
{/*  
    {/* <!-- Portfolio Section --> */}
    <h2>Portfolio Heading</h2>

    <div className="row">
      <div className="col-lg-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">Project One</a>
            </h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">Project Two</a>
            </h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">Project Three</a>
            </h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quisquam, error quod sed cumque, odio distinctio velit nostrum temporibus necessitatibus et facere atque iure perspiciatis mollitia recusandae vero vel quam!</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">Project Four</a>
            </h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">Project Five</a>
            </h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">Project Six</a>
            </h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque earum nostrum suscipit ducimus nihil provident, perferendis rem illo, voluptate atque, sit eius in voluptates, nemo repellat fugiat excepturi! Nemo, esse.</p>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- /.row --> */}

    {/* <!-- Features Section --> */}
    <div className="row">
      <div className="col-lg-6">
        <h2>Modern Business Features</h2>
        <p>The Modern Business template by Start Bootstrap includes:</p>
        <ul>
          <li>
            <strong>Bootstrap v4</strong>
          </li>
          <li>jQuery</li>
          <li>Font Awesome</li>
          <li>Working contact form with validation</li>
          <li>Unstyled page elements for easy customization</li>
        </ul>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.</p>
      </div>
      <div className="col-lg-6">
        <img className="img-fluid rounded" src="http://placehold.it/700x450" alt=""/>
      </div>
    </div>
    {/* <!-- /.row --> */}

    {/* <hr> */}

    {/* <!-- Call to Action Section --> */}
    <div className="row mb-4">
      <div className="col-md-8">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, expedita, saepe, vero rerum deleniti beatae veniam harum neque nemo praesentium cum alias asperiores commodi.</p>
      </div>
      <div className="col-md-4">
        <a className="btn btn-lg btn-secondary btn-block" href="#">Call to Action</a>
      </div>
    </div>

  </div>
  {/* <!-- /.container --> */}

 */}        </React.Fragment>
        
      
    )
  }
}
