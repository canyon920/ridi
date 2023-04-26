import { useState, useEffect } from "react";

export default function Navbar(){
  const [activeLink, setActiveLink] = useState('home');
  const [scolled, seScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 30) {
        seScrolled(true);
      } else {
        seScrolled(false)
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

    return (
      <Navbar expend="lg" className={scolled ? "scolled" : ""}>
          <Container>
            <Navbar.Brand href="#home">
              <img src={''} alt='glogo' />
            </Navbar.Brand>
            <Navbar.Toggle>
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}> Home </Nav.Link>    
                <Nav.Link href="#skill" className={activeLink === 'skill' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skill')}> Home </Nav.Link>    
                <Nav.Link href="project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}> Home </Nav.Link>    
              </Nav>
            </Navbar.Collapse>
          </Container>

      </Navbar>
      
    )
}