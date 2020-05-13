import React from 'react'
import Slider from 'react-slick'

class SlickCarousel extends React.Component {
  render() {
    const settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: '280px',
      slidesToShow: 1,
      speed: 500
    }
    return (
      <section>
        <div>
          <Slider {...settings}>
            <div>
              <a href="https://labbookapp.herokuapp.com/">
                <img
                  src="https://i.ibb.co/4M8QkGM/Screenshot-2020-04-28-at-04-10-13.png"
                  alt="Screenshot-2020-04-28-at-04-10-13"
                  border="0"
                />
              </a>
            </div>
            <div>
              <a href="https://jdpintoga.github.io/searchncook/">
                <img
                  src="https://i.ibb.co/NC15J5P/Screenshot-2020-05-12-at-04-20-42.png"
                  alt="Screenshot-2020-05-12-at-04-20-42"
                  border="0"
                />
              </a>
            </div>
            <div>
              <a href="https://esportscenter.herokuapp.com/">
                <img
                  src="https://i.ibb.co/cFhNVxQ/Screenshot-2020-05-12-at-04-18-10.png"
                  alt="Screenshot-2020-05-12-at-04-18-10"
                  border="0"
                />
              </a>
            </div>
            <div>
              <a href="https://jdpintoga.github.io/project-2/">
                <img
                  src="https://i.ibb.co/rc71zv1/Screenshot-2020-05-12-at-04-17-38.png"
                  alt="Screenshot-2020-05-12-at-04-17-38"
                  border="0"
                />
              </a>
            </div>
            <div>
              <a href="https://github.com/jdpintoGA/project-1">
                <img
                  src="https://i.ibb.co/hLcdJKT/Screenshot-2020-05-12-at-04-15-39.png"
                  alt="Tick Tack Toe"
                  border="0"
                />
              </a>
            </div>
          </Slider>
        </div>
      </section>
    )
  }
}
export default SlickCarousel
