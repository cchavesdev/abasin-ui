import React from 'react'

export const Header = () => {
    return (
        <header>
            <div id='topBar' class="top-bar d-flex justify-content-start">
                <div class="left-controls">
                    <div id="menuHamburger" class="hamburger-icon popup-opener">
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                    </div>

                    <div class="conditions">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                            <rect opacity="0.7" x="1" y="1.44141" width="17" height="17" rx="8.5" stroke="#49AAF0"
                                stroke-width="2"></rect>
                            <rect width="11" height="11" rx="5.5" transform="matrix(-1 0 0 1 15 4.44141)" fill="#49AAF0">
                            </rect>
                        </svg>
                    </div>
                    <span class="popup-opener conditions-toggle">Conditions</span>
                </div>
                <img src="/img/abasinlogo.svg" class="topbar-logo" />
                <button>Book &amp; Buy</button>
            </div>
            <div class="popup-container" id="popupContainer">
                <div class="nav-container">
                    <ul class="primary-nav">
                        <li class="primary-nav-option active" id="explore">
                            <span class="parent-nav">Explore</span>
                            <div class="secondary-level active" data-parent="explore">
                                <div class="nav-block">
                                    <span>The Mountain</span>
                                    <ul class="">
                                        <li>
                                            <a>Explore Link</a>
                                        </li>
                                        <li>
                                            <a>Explore Link</a>
                                        </li>
                                        <li>
                                            <a>Explore Link</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="nav-block">
                                    <span>Activities</span>
                                    <ul class="">
                                        <li>
                                            <a>Explore Link</a>
                                        </li>
                                        <li>
                                            <a>Explore Link</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="nav-block">
                                    <span>The Mountain</span>
                                    <ul class="">
                                        <li>
                                            <a>Explore Link</a>
                                        </li>
                                        <li>
                                            <a>Explore Link</a>
                                        </li>
                                        <li>
                                            <a>Explore Link</a>
                                        </li>
                                        <li>
                                            <a>Explore Link</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="primary-nav-option" id="visit"><span class="parent-nav">Visit</span>

                            <div class="secondary-level" data-parent="visit">
                                <div class="nav-block">
                                    <span>The Mountain</span>
                                    <ul class="">
                                        <li>
                                            <a>Visit Link</a>
                                        </li>
                                        <li>
                                            <a>Visit Link</a>
                                        </li>
                                        <li>
                                            <a>Visit Link</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="nav-block">
                                    <span>Activities</span>
                                    <ul class="">
                                        <li>
                                            <a>Visit Link</a>
                                        </li>
                                        <li>
                                            <a>Visit Link</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="nav-block">
                                    <span>The Mountain</span>
                                    <ul class="">
                                        <li>
                                            <a>Visit Link</a>
                                        </li>
                                        <li>
                                            <a>Visit Link</a>
                                        </li>
                                        <li>
                                            <a>Visit Link</a>
                                        </li>
                                        <li>
                                            <a>Visit Link</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="primary-nav-option " id="engage"><span class="parent-nav">Engage</span>
                            <div class="secondary-level" data-parent="engage">
                                <div class="nav-block">
                                    <span>The Mountain</span>
                                    <ul class="">
                                        <li>
                                            <a>Engage Link</a>
                                        </li>
                                        <li>
                                            <a>Engage Link</a>
                                        </li>
                                        <li>
                                            <a>Engage Link</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="nav-block">
                                    <span>Activities</span>
                                    <ul class="">
                                        <li>
                                            <a>Engage Link</a>
                                        </li>
                                        <li>
                                            <a>Engage Link</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="nav-block">
                                    <span>The Mountain</span>
                                    <ul class="">
                                        <li>
                                            <a>Engage Link</a>
                                        </li>
                                        <li>
                                            <a>Engage Link</a>
                                        </li>
                                        <li>
                                            <a>Engage Link</a>
                                        </li>
                                        <li>
                                            <a>Engage Link</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="primary-nav-option " id="tickets"><span class="parent-nav">Tickets</span>

                            <div class="secondary-level" data-parent="tickets">
                                <div class="nav-block">
                                    <span>The Mountain</span>
                                    <ul class="">
                                        <li>
                                            <a>Tickets Link</a>
                                        </li>
                                        <li>
                                            <a>Tickets Link</a>
                                        </li>
                                        <li>
                                            <a>Tickets Link</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="nav-block">
                                    <span>Activities</span>
                                    <ul class="">
                                        <li>
                                            <a>Tickets Link</a>
                                        </li>
                                        <li>
                                            <a>Tickets Link</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="nav-block">
                                    <span>The Mountain</span>
                                    <ul class="">
                                        <li>
                                            <a>Tickets Link</a>
                                        </li>
                                        <li>
                                            <a>Tickets Link</a>
                                        </li>
                                        <li>
                                            <a>Tickets Link</a>
                                        </li>
                                        <li>
                                            <a>Tickets Link</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </li>
                    </ul>
                    {/*                    
                   
                   
                     */}

                </div>
                <div class="widget-container">
                    <div class="options">
                        <ul>
                            <li class="widget-option" id="snow">
                                <div class="widget-label">
                                    <span class="widget-label-text">Snow Fall</span>
                                </div>
                                <div class="option-detail" data-option="snow">

                                    <div class="conditions">
                                        <ul>
                                            <li>
                                                9" <span>Past 24HRS</span>
                                            </li>
                                            <li>
                                                72" <span>Past 48HRS</span>
                                            </li>
                                            <li>
                                                203" <span>Base</span>
                                            </li>
                                        </ul>
                                        <button>SEE SNOW REPORT</button>
                                    </div>


                                </div>
                                <div class="extra-div">
                                    <img class="img-fluid" src="/img/webcam.png" />
                                    <span>Mountain Cams: top of Pallavicini</span>
                                </div>
                            </li>
                            <li class="widget-option" id="weather">
                                <div class="widget-label">
                                    <span class="widget-label-text">Conditions</span>
                                </div>
                                <div class="option-detail" data-option="weather">

                                    <div class="conditions">
                                        <ul>
                                            <li>
                                                64° <span class="temp">f</span> <span>Todays High</span>
                                            </li>
                                            <li>
                                                37° <span class="temp">f</span> <span>Todays Low</span>
                                            </li>
                                            <li>
                                                5 <span class="temp">MPH</span> <span>North West Wind</span>
                                            </li>
                                        </ul>
                                        <button>See full weather</button>
                                    </div>
                                </div>
                                <div class="extra-div">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="123" height="120" viewBox="0 0 123 120" fill="none">
                                        <g clip-path="url(#clip0_880_17125)">
                                            <path d="M31.3719 71.1429C30.3082 69.4754 29.2325 67.9859 28.3586 66.3857C22.7402 56.0797 24.1904 43.3915 31.9481 34.5534C42.503 22.5269 61.2263 22.0432 72.4415 33.4922C76.1439 37.2748 78.6289 41.7216 79.7622 46.8975C79.9687 47.8359 80.2905 48.1319 81.2965 47.9634C98.3918 45.1048 115.67 55.5383 120.976 72.0765C125.223 85.3206 122.784 97.4096 113.689 107.867C106.836 115.745 97.914 119.814 87.4623 119.913C71.5579 120.062 55.6535 119.973 39.7466 119.949C28.1497 119.932 18.1974 112.071 15.4266 100.814C12.5022 88.9323 18.8025 76.4318 30.0849 71.73C30.5099 71.552 30.9229 71.3474 31.3719 71.1405V71.1429ZM63.7666 114.381C71.5171 114.381 79.2652 114.393 87.0157 114.381C107.6 114.345 122.376 93.7761 115.898 74.1868C111.785 61.7441 100.361 53.3053 87.3207 53.0719C74.5736 52.8433 62.8614 60.7864 58.3306 72.7286C57.4783 74.9761 56.9212 75.3683 54.5106 75.3707C49.7157 75.3731 44.9233 75.3731 40.1284 75.3659C36.7526 75.3611 33.5688 76.0757 30.5627 77.6662C21.8326 82.2863 17.794 93.2708 21.7701 102.318C25.1628 110.038 31.2206 114.186 39.677 114.35C47.7037 114.506 55.7351 114.383 63.7642 114.383L63.7666 114.381ZM45.682 69.7978C47.9582 69.7978 50.2392 69.8459 52.5129 69.7593C52.9835 69.7425 53.6726 69.3406 53.8623 68.9315C57.9921 60.0789 64.5133 53.7481 73.5508 50.0689C74.4463 49.7056 74.6744 49.2724 74.4583 48.3532C72.1366 38.4371 64.2059 31.5888 54.1384 30.8453C45.0721 30.1764 36.2147 35.4894 32.4835 43.8391C28.6347 52.4487 30.5795 62.7571 37.2952 69.0879C37.7082 69.4778 38.3997 69.7473 38.9711 69.7665C41.2065 69.8435 43.4442 69.7978 45.682 69.7978Z" fill="white" />
                                            <path d="M52.8251 5.65695C52.8251 6.57614 52.8491 7.49533 52.8203 8.41212C52.7651 10.1013 51.5549 11.3405 49.9871 11.3574C48.4048 11.3718 47.1346 10.1542 47.0818 8.48671C47.0242 6.65074 47.0026 4.81236 47.0194 2.97638C47.0362 1.14522 48.2487 -0.0194063 50.0327 0.00225003C51.7278 0.0215001 52.8371 1.20057 52.8635 3.0221C52.8755 3.90039 52.8635 4.77867 52.8635 5.65695C52.8491 5.65695 52.8371 5.65695 52.8227 5.65695H52.8251Z" fill="white" />
                                            <path d="M85.1478 23.6217C83.7095 23.5544 82.91 23.013 82.4106 22.0625C81.8776 21.0495 81.904 19.9739 82.6651 19.1365C84.0889 17.57 85.5751 16.0517 87.1286 14.6151C88.1851 13.6406 89.8106 13.8379 90.8118 14.8798C91.825 15.9386 91.9763 17.5123 90.9919 18.5806C89.5849 20.1086 88.0962 21.5668 86.5668 22.9721C86.1322 23.3715 85.4431 23.4918 85.1478 23.6217Z" fill="white" />
                                            <path d="M20.1518 23.6057C19.8157 23.418 19.1122 23.1822 18.6128 22.725C17.2586 21.4834 15.9692 20.1696 14.6919 18.8461C13.525 17.6358 13.5274 15.9923 14.6367 14.8758C15.8036 13.7016 17.4411 13.7088 18.6824 14.9336C20.0198 16.2546 21.3356 17.5949 22.6345 18.952C23.4725 19.8279 23.5829 20.8794 23.0931 21.955C22.5985 23.0354 21.7053 23.5672 20.1518 23.6081V23.6057Z" fill="white" />
                                            <path d="M5.54158 53.053C4.58597 53.053 3.62796 53.1035 2.67715 53.0409C1.13809 52.9423 0.0408184 51.8017 0.00240193 50.3556C-0.0360146 48.8637 1.07326 47.5932 2.65794 47.5258C4.56436 47.4464 6.48038 47.4536 8.3892 47.533C9.97868 47.6004 11.1024 48.8589 11.0664 50.3387C11.0279 51.845 9.89465 52.9832 8.29076 53.0602C7.37597 53.1035 6.45877 53.0674 5.54398 53.0674C5.54398 53.0602 5.54398 53.0554 5.54398 53.0482L5.54158 53.053Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_880_17125">
                                                <rect width="123" height="120" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span>A 40 percent chance of snow showers. Mostly cloudy, with a steady temperature around 24. </span>
                                </div>
                            </li>
                            <li class="widget-option" id="terrain">
                                <div class="widget-label">
                                    <span class="widget-label-text">Terrain Status</span>
                                </div>
                                <div class="option-detail" data-option="terrain">

                                    <div class="conditions">
                                        <ul>
                                            <li class="sr">
                                                145 <span class="quantity">/145</span> <span>Open Runs</span>
                                            </li>
                                            <li class="sr">
                                                9 <span class="quantity">/9</span> <span>Open Lifts</span>
                                            </li>
                                            <li class="sr">
                                                4 <span class="quantity">/7</span> <span>Open Mountain Areas</span>
                                            </li>
                                        </ul>
                                        <button>SEE terrain status</button>
                                    </div>


                                </div>

                            </li>
                        </ul>
                    </div>

                    {/* 

                        
                    </div>
                    */}
                </div>
            </div>

        </header>
    )
}
