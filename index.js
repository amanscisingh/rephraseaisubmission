const fetch = require('node-fetch');

const url = 'https://personalized-brand.api.rephrase.ai/v2/campaign/create';

const payload = {
    "videoDimension": {"height": 1080, "width": 1920},
    "scenes": [
        {
            "elements": [
                {
                    "style": {
                        "height": "100%",
                        "width": "100%",
                        "position": "absolute",
                        "zIndex": 1,
                    },
                    "asset": {
                        "kind": "Image",
                        "use": "Background",
                        "url": "https://www.zscaler.fr/cdn-cgi/image/format%3Dauto/sites/default/files/images/blogs/IIT%20BHU.jpg",
                    },
                },
                {
                    "style": {
                        "position": "absolute",
                        "zIndex": 2,
                        "bottom": "0em",
                        "objectFit": "cover",
                        "height": "37.5em",
                        "width": "66.66666666666667em",
                        "left": "16.666666666666664em",
                    },
                    "asset": {
                        "kind": "Spokesperson",
                        "spokespersonVideo": {
                            "output_params": {
                                "video": {
                                    "resolution": {"height": 720, "width": 1280},
                                    "background": {"alpha": 0},
                                    "crop": {"preset": "MS"},
                                }
                            },
                            "model": "george_retrain_nt",
                            "voiceId": "569fffb0-05a3-48a2-96a3-bf411c376477__005",
                            "gender": "male",
                            "transcript": "<speak> I am Aman Singh, final year student at IIT-BHU. I will be completing my Bachelors in Civil Engineering by may 2023. My aggregate CPI till now is 8.38. </speak>",
                            "transcript_type": "ssml_limited",
                        },
                    },
                },
            ]
        },

        {
            "elements": [
                {
                    "style": {
                        "height": "100%",
                        "width": "100%",
                        "position": "absolute",
                        "zIndex": 1,
                    },
                    "asset": {
                        "kind": "Image",
                        "use": "Background",
                        "url": "https://www.simplilearn.com/ice9/free_resources_article_thumb/Best-Programming-Languages-to-Start-Learning-Today.jpg",
                    },
                },
                {
                    "style": {
                        "position": "absolute",
                        "zIndex": 2,
                        "bottom": "0em",
                        "objectFit": "cover",
                        "height": "37.5em",
                        "width": "66.66666666666667em",
                        "left": "16.666666666666664em",
                    },
                    "asset": {
                        "kind": "Spokesperson",
                        "spokespersonVideo": {
                            "output_params": {
                                "video": {
                                    "resolution": {"height": 720, "width": 1280},
                                    "background": {"alpha": 0},
                                    "crop": {"preset": "MS"},
                                }
                            },
                            "model": "george_retrain_nt",
                            "voiceId": "569fffb0-05a3-48a2-96a3-bf411c376477__005",
                            "gender": "male",
                            "transcript": "<speak> I code in C++, Python and Javascript languages. I have experience with HTML, CSS, ReactJs, React Native, Vue Js, Node Js, Express Js, MongoDB, SQL, PHP, Docker, GitHub, GitLab, Android Studio, and Hybrid HTML framework Monaca. I am interested in Problem Solving, Software Development, Data Structures and Algorithms, and Freelancing </speak>",
                            "transcript_type": "ssml_limited",
                        },
                    },
                },
            ]
        },

        {
            "elements": [
                {
                    "style": {
                        "height": "100%",
                        "width": "100%",
                        "position": "absolute",
                        "zIndex": 1,
                    },
                    "asset": {
                        "kind": "Image",
                        "use": "Background",
                        "url": "https://injapan.gaijinpot.com/app/uploads/2013/03/japan-business.jpg",
                    },
                },
                {
                    "style": {
                        "position": "absolute",
                        "zIndex": 2,
                        "bottom": "0em",
                        "objectFit": "cover",
                        "height": "37.5em",
                        "width": "66.66666666666667em",
                        "left": "16.666666666666664em",
                    },
                    "asset": {
                        "kind": "Spokesperson",
                        "spokespersonVideo": {
                            "output_params": {
                                "video": {
                                    "resolution": {"height": 720, "width": 1280},
                                    "background": {"alpha": 0},
                                    "crop": {"preset": "MS"},
                                }
                            },
                            "model": "george_retrain_nt",
                            "voiceId": "569fffb0-05a3-48a2-96a3-bf411c376477__005",
                            "gender": "male",
                            "transcript": "<speak> I worked as an intern as a software developer at HM Solutions in Willings inc Japan. There I created a design simulator using class based implementation of React Js components. I also interned in the same company working on a different project where I solved bugs for a production software written in Vue Js, PHP, Docker, etc. </speak>",
                            "transcript_type": "ssml_limited",
                        },
                    },
                },
            ]
        },

        {
            "elements": [
                {
                    "style": {
                        "height": "100%",
                        "width": "100%",
                        "position": "absolute",
                        "zIndex": 1,
                    },
                    "asset": {
                        "kind": "Image",
                        "use": "Background",
                        "url": "https://www.bocasay.com/wp-content/uploads/2020/03/MERN-stack-1.png",
                    },
                },
                {
                    "style": {
                        "position": "absolute",
                        "zIndex": 2,
                        "bottom": "0em",
                        "objectFit": "cover",
                        "height": "37.5em",
                        "width": "66.66666666666667em",
                        "left": "16.666666666666664em",
                    },
                    "asset": {
                        "kind": "Spokesperson",
                        "spokespersonVideo": {
                            "output_params": {
                                "video": {
                                    "resolution": {"height": 720, "width": 1280},
                                    "background": {"alpha": 0},
                                    "crop": {"preset": "MS"},
                                }
                            },
                            "model": "george_retrain_nt",
                            "voiceId": "569fffb0-05a3-48a2-96a3-bf411c376477__005",
                            "gender": "male",
                            "transcript": "<speak> I created several projects using MERN stack. I created working prototype Employee Management System, a react Native mobile application for geo-tagged data collection, and a personal calender working prototype.  </speak>",
                            "transcript_type": "ssml_limited",
                        },
                    },
                },
            ]
        },

        {
            "elements": [
                {
                    "style": {
                        "height": "100%",
                        "width": "100%",
                        "position": "absolute",
                        "zIndex": 1,
                    },
                    "asset": {
                        "kind": "Image",
                        "use": "Background",
                        "url": "https://www.callcentrehelper.com/images/stories/2021/03/mountain-top-celebration-760.jpg",
                    },
                },
                {
                    "style": {
                        "position": "absolute",
                        "zIndex": 2,
                        "bottom": "0em",
                        "objectFit": "cover",
                        "height": "37.5em",
                        "width": "66.66666666666667em",
                        "left": "16.666666666666664em",
                    },
                    "asset": {
                        "kind": "Spokesperson",
                        "spokespersonVideo": {
                            "output_params": {
                                "video": {
                                    "resolution": {"height": 720, "width": 1280},
                                    "background": {"alpha": 0},
                                    "crop": {"preset": "MS"},
                                }
                            },
                            "model": "george_retrain_nt",
                            "voiceId": "569fffb0-05a3-48a2-96a3-bf411c376477__005",
                            "gender": "male",
                            "transcript": "<speak> I have also won several hackathons. I was runner up in Smart City Varanasi Hackathon and Google Startup Weekend. ThankYou. </speak>",
                            "transcript_type": "ssml_limited",
                        },
                    },
                },
            ]
        },
        
    ],
    "title": "Into to MJ",
    "thumbnailUrl": "https://blog.siriusxm.com/wp-content/uploads/2022/11/MichaelJacksonChannel-1117.jpg",
}

const options = {
  method: 'POST',
  headers: {
    accept: 'application/json', 
    'content-type': 'application/json',
    Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkhNcHdjdFl4YWlRdWg4Y0M0ejN0UCJ9.eyJpc3MiOiJodHRwczovL2F1dGgucmVwaHJhc2UuYWkvIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMTgyMjcyMzY2Njc0Nzg3Njc4MTEiLCJhdWQiOlsiaHR0cHM6Ly9kaXkucmVwaHJhc2UuYWkvYXV0aDAiLCJodHRwczovL3JlcGhyYXNlYWktcHJvZC51cy5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjc5NzYzNjM4LCJleHAiOjE2Nzk4NTAwMzgsImF6cCI6IjNLVTVqdkVxV0pCQ1VLblBYMjZvbmFTUHkzakozMEo0Iiwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSByZWFkOnJlcGhyYXNlLmFpIGFsbDpkaXkgcmVhZDpyZXBocmFzZS5haSJ9.DwSwZDkPgr4a1arn5pD6kaoQD_vAqJRi_UyWVa0PcGQjX92aUAREXqcmW6eJXahdENWrtoL30K0QurWabCfhfLc103tHpWFVx1jGc0stXk6c3Wh_4dtR9h583hAVtXKJuBFb-B7lIK2hln3o33_ni-bnIM_iAgYtSVW0a891_4u0XHcACyEtX78-cpatffFZyZ0AY0qLXFayRBnF26Fl4h8hFPyxKb7vd0zVelYGnHnCo5JLZe95I_JvnPR2KRXmR-jpSr1ouOTc8WsO9VK0stxHqc0RZAe2ZTTs4P3vo-mb9g6teVlGpF-KrZmGxs156lLgI3TfhGpYXXaknvVwAA"
},
body: JSON.stringify(payload)
};

fetch(url, options)
  .then(res => res.json())
  .then(json => {
      console.log(json)
      const campaignID = json.campaign_id;
      const urlExportCampaign = `https://personalized-brand.api.rephrase.ai/v2/campaign/${campaignID}/export`;
      fetch(urlExportCampaign, {
          method: 'POST',
          headers: {
              accept: 'application/json', 
              Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkhNcHdjdFl4YWlRdWg4Y0M0ejN0UCJ9.eyJpc3MiOiJodHRwczovL2F1dGgucmVwaHJhc2UuYWkvIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMTgyMjcyMzY2Njc0Nzg3Njc4MTEiLCJhdWQiOlsiaHR0cHM6Ly9kaXkucmVwaHJhc2UuYWkvYXV0aDAiLCJodHRwczovL3JlcGhyYXNlYWktcHJvZC51cy5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjc5NzYzNjM4LCJleHAiOjE2Nzk4NTAwMzgsImF6cCI6IjNLVTVqdkVxV0pCQ1VLblBYMjZvbmFTUHkzakozMEo0Iiwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSByZWFkOnJlcGhyYXNlLmFpIGFsbDpkaXkgcmVhZDpyZXBocmFzZS5haSJ9.DwSwZDkPgr4a1arn5pD6kaoQD_vAqJRi_UyWVa0PcGQjX92aUAREXqcmW6eJXahdENWrtoL30K0QurWabCfhfLc103tHpWFVx1jGc0stXk6c3Wh_4dtR9h583hAVtXKJuBFb-B7lIK2hln3o33_ni-bnIM_iAgYtSVW0a891_4u0XHcACyEtX78-cpatffFZyZ0AY0qLXFayRBnF26Fl4h8hFPyxKb7vd0zVelYGnHnCo5JLZe95I_JvnPR2KRXmR-jpSr1ouOTc8WsO9VK0stxHqc0RZAe2ZTTs4P3vo-mb9g6teVlGpF-KrZmGxs156lLgI3TfhGpYXXaknvVwAA"
          },
      })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            const urlCheckStatusOfCampaign = `https://personalized-brand.api.rephrase.ai/v2/campaign/${campaignID}`;
            fetch(urlCheckStatusOfCampaign, {
                method: 'GET',
                headers: {
                    accept: 'application/json', 
                    Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkhNcHdjdFl4YWlRdWg4Y0M0ejN0UCJ9.eyJpc3MiOiJodHRwczovL2F1dGgucmVwaHJhc2UuYWkvIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMTgyMjcyMzY2Njc0Nzg3Njc4MTEiLCJhdWQiOlsiaHR0cHM6Ly9kaXkucmVwaHJhc2UuYWkvYXV0aDAiLCJodHRwczovL3JlcGhyYXNlYWktcHJvZC51cy5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjc5NzYzNjM4LCJleHAiOjE2Nzk4NTAwMzgsImF6cCI6IjNLVTVqdkVxV0pCQ1VLblBYMjZvbmFTUHkzakozMEo0Iiwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSByZWFkOnJlcGhyYXNlLmFpIGFsbDpkaXkgcmVhZDpyZXBocmFzZS5haSJ9.DwSwZDkPgr4a1arn5pD6kaoQD_vAqJRi_UyWVa0PcGQjX92aUAREXqcmW6eJXahdENWrtoL30K0QurWabCfhfLc103tHpWFVx1jGc0stXk6c3Wh_4dtR9h583hAVtXKJuBFb-B7lIK2hln3o33_ni-bnIM_iAgYtSVW0a891_4u0XHcACyEtX78-cpatffFZyZ0AY0qLXFayRBnF26Fl4h8hFPyxKb7vd0zVelYGnHnCo5JLZe95I_JvnPR2KRXmR-jpSr1ouOTc8WsO9VK0stxHqc0RZAe2ZTTs4P3vo-mb9g6teVlGpF-KrZmGxs156lLgI3TfhGpYXXaknvVwAA"
                },
            })
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error('error:' + err));
        })
        .catch(err => console.error('error:' + err));

  })
  .catch(err => console.error('error:' + err));

// const campaignID = 'zI2AzCN8lcOYXoZ19V0zkeUtiZ1KWy'; // enter campaign that you get from response

// -- uncomment to export campaign manually
// const urlExportCampaign = `https://personalized-brand.api.rephrase.ai/v2/campaign/${campaignID}/export`;
// fetch(urlExportCampaign, {
//     method: 'POST',
//     headers: {
//         accept: 'application/json', 
//         Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkhNcHdjdFl4YWlRdWg4Y0M0ejN0UCJ9.eyJpc3MiOiJodHRwczovL2F1dGgucmVwaHJhc2UuYWkvIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMTgyMjcyMzY2Njc0Nzg3Njc4MTEiLCJhdWQiOlsiaHR0cHM6Ly9kaXkucmVwaHJhc2UuYWkvYXV0aDAiLCJodHRwczovL3JlcGhyYXNlYWktcHJvZC51cy5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjc5NzYzNjM4LCJleHAiOjE2Nzk4NTAwMzgsImF6cCI6IjNLVTVqdkVxV0pCQ1VLblBYMjZvbmFTUHkzakozMEo0Iiwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSByZWFkOnJlcGhyYXNlLmFpIGFsbDpkaXkgcmVhZDpyZXBocmFzZS5haSJ9.DwSwZDkPgr4a1arn5pD6kaoQD_vAqJRi_UyWVa0PcGQjX92aUAREXqcmW6eJXahdENWrtoL30K0QurWabCfhfLc103tHpWFVx1jGc0stXk6c3Wh_4dtR9h583hAVtXKJuBFb-B7lIK2hln3o33_ni-bnIM_iAgYtSVW0a891_4u0XHcACyEtX78-cpatffFZyZ0AY0qLXFayRBnF26Fl4h8hFPyxKb7vd0zVelYGnHnCo5JLZe95I_JvnPR2KRXmR-jpSr1ouOTc8WsO9VK0stxHqc0RZAe2ZTTs4P3vo-mb9g6teVlGpF-KrZmGxs156lLgI3TfhGpYXXaknvVwAA"
//     },
// })
// .then(res => res.json())
// .then(json => {
//     console.log(json)
// })

// -- uncomment to check status of campaign and download the video if the video is created
// const urlCheckStatusOfCampaign = `https://personalized-brand.api.rephrase.ai/v2/campaign/${campaignID}`;
// fetch(urlCheckStatusOfCampaign, {
//     method: 'GET',
//     headers: {
//         accept: 'application/json', 
//         Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkhNcHdjdFl4YWlRdWg4Y0M0ejN0UCJ9.eyJpc3MiOiJodHRwczovL2F1dGgucmVwaHJhc2UuYWkvIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMTgyMjcyMzY2Njc0Nzg3Njc4MTEiLCJhdWQiOlsiaHR0cHM6Ly9kaXkucmVwaHJhc2UuYWkvYXV0aDAiLCJodHRwczovL3JlcGhyYXNlYWktcHJvZC51cy5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjc5NzYzNjM4LCJleHAiOjE2Nzk4NTAwMzgsImF6cCI6IjNLVTVqdkVxV0pCQ1VLblBYMjZvbmFTUHkzakozMEo0Iiwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSByZWFkOnJlcGhyYXNlLmFpIGFsbDpkaXkgcmVhZDpyZXBocmFzZS5haSJ9.DwSwZDkPgr4a1arn5pD6kaoQD_vAqJRi_UyWVa0PcGQjX92aUAREXqcmW6eJXahdENWrtoL30K0QurWabCfhfLc103tHpWFVx1jGc0stXk6c3Wh_4dtR9h583hAVtXKJuBFb-B7lIK2hln3o33_ni-bnIM_iAgYtSVW0a891_4u0XHcACyEtX78-cpatffFZyZ0AY0qLXFayRBnF26Fl4h8hFPyxKb7vd0zVelYGnHnCo5JLZe95I_JvnPR2KRXmR-jpSr1ouOTc8WsO9VK0stxHqc0RZAe2ZTTs4P3vo-mb9g6teVlGpF-KrZmGxs156lLgI3TfhGpYXXaknvVwAA"
//     },
// })
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));