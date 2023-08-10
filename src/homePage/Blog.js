import React from 'react'

export const Blog = () => {
    return (
        <div>
            <div class="bg-linear">
                <div class="blog-container">
                    <h5>The latest from al</h5>
                    <div class="row blog-listing justify-content-between">
                        <div class="col-12 col-lg-4 d-flex justify-content-center flex-wrap blog-card">
                            <img class="img-fluid" src="/img/blogfile1.png" alt="" />
                            <span>FROM AL</span>
                            <h6>Getting The Park Ready</h6>
                        </div>
                        <div class="col-12 col-lg-4 d-flex justify-content-center flex-wrap blog-card">
                            <img class="img-fluid" src="/img/blogfile1.png" alt="" />
                            <span>FROM AL</span>
                            <h6>Getting The Park Ready</h6>
                        </div>
                        <div class="col-12 col-lg-4 d-flex justify-content-center flex-wrap blog-card">
                            <img class="img-fluid" src="/img/blogfile1.png" alt="" />
                            <span>FROM AL</span>
                            <h6>Getting The Park Ready</h6>
                        </div>
                    </div>
                    <div class="row activities-container">
                        <div class="col-12 col-lg-4 activity-title-box">
                            <h4>
                                Year-Round Mountain
                            </h4>
                            <p>
                                Home to Colorado’s longest winter season from October to June and an adventurous,
                                high-alpine
                                summer
                                season from June to September.
                            </p>
                        </div>
                        <div class="col-12 col-lg-8 d-flex activity-blocks">
                            <div class="mb-auto activity-content">
                                <img class="img-fluid" src="/img/activity.png" />
                                <div class="overlap">
                                    <h6>Alpine Riding</h6>
                                </div>

                            </div>
                            <div class="activity-content">
                                <img class="img-fluid" src="/img/activity.png" />
                                <div class="overlap">
                                    <h6>Alpine Riding</h6>
                                </div>
                            </div>
                            <div class="mt-auto activity-content">
                                <img class="img-fluid" src="/img/activity.png" />
                                <div class="overlap">
                                    <h6>Alpine Riding</h6>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
