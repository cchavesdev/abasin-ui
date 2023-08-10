import React from 'react'
import { PageHero } from './PageHero'
import { TertiaryHero } from '../homePage/TertiaryHero'

export const StandardPage = () => {
  return (
    <div>
        <PageHero></PageHero>
        <div class="">
                <div class="col-12 text-center side-padding">
                    <h3>PARKING</h3>
                    <h6 class="subheading mt-3">A-Basin's gated lots open at 7:00 a.m. and close at 6:00 p.m.
                        year-round.</h6>
                    <img class="mt-5 img-fluid img-100" src="/img/abasinmap.png" />
                </div>
                <div class="side-padding container-fluid mt-5  mb-5 m-0 ">
                    <div class="row gx-5 p-0 m-0">
                        <div class="col-12 col-lg-6 p-0 m-0">
                            <div class="abasin-box">
                                <h6 class="title">Parking Status</h6>
                                <div class="d-flex align-items-center">
                                    <h6>Early Riser</h6><span>Open</span>
                                </div>
                                <div class="d-flex align-items-center">
                                    <h6 class="disabled">Early Riser</h6><span class="">Full</span>
                                </div>
                                <div class="d-flex align-items-center">
                                    <h6>Early Riser</h6><span>Open</span>
                                </div>
                            </div>
                            <div class="mt-5 abasin-info">
                                <h5 class="subheading">Important parking info</h5>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <h5 class="subheading">Important parking info</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="side-padding col-12">
                    <h5>The Beach</h5>
                    <h5 class="subheading mt-3">Open 7:00 AM to 6:00 PM - Advance reservations required.</h5>
                    <p class="mt-3">The Beach is Arapahoe Basin's front-row parking, aka prime ski-in, ski-out real
                        estate adjacent the bottom of our frontside lifts. Home to parties, reunions, or just gatherings
                        of old friends and new, The Beach is where you want to be whether you are racking up Pali laps
                        all day or you don't ski at all and just want to hang out where the fun is.</p>
                    <button>reserve your spot</button>
                </div>
                <div class="side-padding col-12 slideshow">
                
                    <div class="swiper">
                        
                        <div class="swiper-wrapper">
                          
                            <div class="swiper-slide">
                                <img class="img-fluid" src="/img/slideshow1.png" />
                            </div>
                            <div class="swiper-slide">
                                <img class="img-fluid" src="/img/slideshow1.png" />
                            </div>
                            <div class="swiper-slide">
                                <img class="img-fluid" src="/img/slideshow1.png" />
                            </div>

                        </div>
                      
                        <div class="swiper-pagination"></div>

                  
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>

                     
                      
                    </div>
                </div>

                <div class="horizontal-card-list side-padding">
                    <h3 class="text-center">Ski & Ride More Sustainably</h3>
                    <div class="abasin-card-h row align-items-center">
                       <div class="col-12 col-lg-6 img-container">
                        <img src="/img/horizontal-card1.png" class="img-fluid"/>
                       </div>
                        <div class="col-12 col-lg-6 text-container">
                            <h5>Carpooling</h5>
                            <p>On Saturdays and Sundays during winter, before noon, the Early Riser parking lot is $20
                                for vehicles with fewer than 3 people; free for carpoolers.
                                Need to find people? TreadShare is a Colorado-based carpooling app that links drivers
                                and passengers so they can share rides and the cost of the drive.</p>
                                <button>Treadshare App</button>
                        </div>
                    </div>
                    <div class="abasin-card-h row align-items-center">
                        <div class="col-12 col-lg-6 img-container">
                         <img src="/img/horizontal-card1.png" class="img-fluid"/>
                        </div>
                         <div class="col-12 col-lg-6 text-container">
                             <h5>Carpooling</h5>
                             <p>On Saturdays and Sundays during winter, before noon, the Early Riser parking lot is $20
                                 for vehicles with fewer than 3 people; free for carpoolers.
                                 Need to find people? TreadShare is a Colorado-based carpooling app that links drivers
                                 and passengers so they can share rides and the cost of the drive.</p>
                                 <button>Treadshare App</button>
                         </div>
                     </div>
                     <div class="abasin-card-h row align-items-center">
                        <div class="col-12 col-lg-6 img-container">
                         <img src="/img/horizontal-card1.png" class="img-fluid"/>
                        </div>
                         <div class="col-12 col-lg-6 text-container">
                             <h5>Carpooling</h5>
                             <p>On Saturdays and Sundays during winter, before noon, the Early Riser parking lot is $20
                                 for vehicles with fewer than 3 people; free for carpoolers.
                                 Need to find people? TreadShare is a Colorado-based carpooling app that links drivers
                                 and passengers so they can share rides and the cost of the drive.</p>
                                 <button>Treadshare App</button>
                         </div>
                     </div>
                     <div class="abasin-card-h row align-items-center">
                        <div class="col-12 col-lg-6 img-container">
                         <img src="/img/horizontal-card1.png" class="img-fluid"/>
                        </div>
                         <div class="col-12 col-lg-6 text-container">
                             <h5>Carpooling</h5>
                             <p>On Saturdays and Sundays during winter, before noon, the Early Riser parking lot is $20
                                 for vehicles with fewer than 3 people; free for carpoolers.
                                 Need to find people? TreadShare is a Colorado-based carpooling app that links drivers
                                 and passengers so they can share rides and the cost of the drive.</p>
                                 <button>Treadshare App</button>
                         </div>
                     </div>
                </div>

            

            </div>
    </div>
  )
}
