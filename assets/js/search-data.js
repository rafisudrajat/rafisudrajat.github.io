// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "We focus on the design and development of algorithms to enable robust decision theory becomes practical computational tools for robotics and related domain. Such computational tools will enable robots to design their own strategies, such as deciding what data to use, how to gather the data, and how to adaptively improve its strategies, so as to accomplish various tasks well, despite various modelling errors and types of uncertainty, and despite limited to no information about the system and its operating environment.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-software",
          title: "software",
          description: "Checkout our organization repository: https://github.com/RDLLab",
          section: "Navigation",
          handler: () => {
            window.location.href = "/software/";
          },
        },{id: "nav-people",
          title: "people",
          description: "Members of the lab",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-contact",
          title: "contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-congrats-to-joshua-song-for-his-mphil-conferral-amp-amp-new-job-at-clarivate",
          title: 'Congrats to Joshua Song for his MPhil conferral &amp;amp;amp; new job at Clarivate!...',
          description: "",
          section: "News",},{id: "news-congrats-to-marcus-hoerger-for-his-phd-conferral",
          title: 'Congrats to Marcus Hoerger for his PhD conferral!',
          description: "",
          section: "News",},{id: "news-congrats-to-erli-wang-for-his-new-job-as-a-researcher-at-nec-lab",
          title: 'Congrats to Erli Wang for his new job as a Researcher at NEC...',
          description: "",
          section: "News",},{id: "news-congrats-to-hanna-kurniawati-for-the-rss-21-test-of-time-award-read-more",
          title: 'Congrats to Hanna Kurniawati for the RSS’21 Test of Time Award! Read more....',
          description: "",
          section: "News",},{id: "news-congrats-to-nick-collins-for-winning-the-alberto-elfes-best-paper-award-at-acra-20-paper-here",
          title: 'Congrats to Nick Collins for winning the Alberto Elfes Best Paper Award at...',
          description: "",
          section: "News",},{id: "news-we-are-excited-to-collaborate-with-safran-under-the-arc-linkage-program-to-investigate-ai-based-co-pilot-for-hems",
          title: 'We are excited to collaborate with Safran under the ARC Linkage Program to...',
          description: "",
          section: "News",},{id: "news-we-are-excited-to-be-part-of-the-soon-to-be-launched-arc-research-hub-in-intelligent-robotic-systems-and-asset-management",
          title: 'We are excited to be part of the soon to be launched ARC...',
          description: "",
          section: "News",},{id: "news-jonathon-schwartz-paper-has-been-accepted-to-aamas-2023-congrats-jonathon-paper-here",
          title: 'Jonathon Schwartz paper has been accepted to AAMAS 2023! Congrats, Jonathon! Paper here...',
          description: "",
          section: "News",},{id: "news-congrats-to-hanna-kurniawati-for-her-appointment-as-the-smartsat-crc-professorial-chair-for-system-autonomy-intelligence-and-decision-making-read-more",
          title: 'Congrats to Hanna Kurniawati for her appointment as the SmartSat CRC Professorial Chair...',
          description: "",
          section: "News",},{id: "news-an-extended-version-of-marcus-hoerger-s-wafr22-paper-has-been-accepted-to-ijrr-congrats-marcus-paper-here",
          title: 'An extended version of Marcus Hoerger’s WAFR22 paper has been accepted to IJRR!...',
          description: "",
          section: "News",},{id: "news-yuanchu-liang-s-paper-from-his-3rd-year-project-has-been-accepted-to-iros-2023-congrats-yuanchu-paper-here",
          title: 'Yuanchu Liang’s paper (from his 3rd year project) has been accepted to IROS...',
          description: "",
          section: "News",},{id: "news-we-have-2-papers-accepted-to-neurips-2023-congrats-to-yongbo-edward-and-yohan",
          title: 'We have 2 papers accepted to NeurIPS 2023! Congrats to Yongbo, Edward and...',
          description: "",
          section: "News",},{id: "news-marcus-paper-has-been-accepted-for-oral-presentation-at-aaai24-congrats-marcus",
          title: 'Marcus’ paper has been accepted for oral presentation at AAAI24. Congrats, Marcus!',
          description: "",
          section: "News",},{id: "news-ivan-s-paper-has-been-accepted-to-wafr-2024-congrats-ivan",
          title: 'Ivan’s paper has been accepted to WAFR 2024. Congrats, Ivan!',
          description: "",
          section: "News",},{id: "news-yuanchu-and-edward-s-paper-has-been-accepted-to-isrr-2024-congrats-yuanchu-and-edward",
          title: 'Yuanchu and Edward’s paper has been accepted to ISRR 2024. Congrats, Yuanchu and...',
          description: "",
          section: "News",},{id: "news-stay-tuned-we-are-heavily-updating-this-website-a-large-part-of-this-website-has-not-been-updated-since-2020",
          title: 'Stay tuned, we are heavily updating this website (a large part of this...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-pomdp-planning-for-problems-with-complex-dynamics",
          title: 'POMDP Planning for Problems with Complex Dynamics',
          description: "Many POMDP (Partially Observable Markov Decision Process) solvers that can compute good approximate solutions on-line have been proposed. Some of them can even find good solutions in near real-time for several realistic problems. In this project, we aim to make on-line POMDP solvers more tractable for systems with complex non-linear dynamics.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project_rdl/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-pomdp-planning-for-problems-with-large-discrete-action-space",
          title: 'POMDP Planning for Problems with Large Discrete Action Space',
          description: "Many good approximate POMDP (Partially Observable Markov Decision Process) solvers have been proposed since mid 2000, allowing POMDP to generate good strategies for realistic problems. Despite these advances, solving problems with large discrete action spaces remains difficult. This project aims to reduce such difficulties.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project_rdl/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-on-line-pomdp-planning-toolkit-oppt",
          title: 'On-line POMDP Planning Toolkit (OPPT)',
          description: "In this project, we develop On-line POMDP Planning Toolkit (OPPT) that allows users to specify POMDP model of motion planing problems via a configuration file and 3D models of the robot and environment.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project_rdl/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-partially-observed-inventory-control",
          title: 'Partially Observed Inventory Control',
          description: "POMDP for inventory control",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project_rdl/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-",
          title: '',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project_rdl/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-scaling-long-horizon-online-pomdp-planning-with-rapid-state-space-sampling",
          title: 'Scaling Long-Horizon Online POMDP Planning with Rapid State Space Sampling',
          description: "Analytically solving the reference-based POMDP bellman backup removes the need of neumerical optimisation during planning, and enables seemless integration of state space sampling and belief space sampling to solve long horizon POMDPs online.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project_rdl/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-approximate-pomdp-solving-without-numerical-optimisation-neurips-ijcai",
          title: 'Approximate POMDP Solving without Numerical Optimisation (NeurIPS + IJCAI)',
          description: "POMDP solver approximation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project_rdl/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-inspection-planning-primitives-with-implicit-models",
          title: 'Inspection Planning Primitives with Implicit Models',
          description: "A memory-efficient inspection planning framework that replace all planning primitives with implicit environment models.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project_rdl/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-adaptive-discretization-using-voronoi-trees-for-continuous-pomdps",
          title: 'Adaptive Discretization using Voronoi Trees for Continuous POMDPs',
          description: "ADVT is a Monte Carlo Tree Search-based POMDP solver that uses Voronoi Trees to adaptively discretize high-dimensional continuous action spaces for more efficient planning. It outperforms existing methods by focusing exploration on promising regions and effectively handling continuous observations using progressive widening.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project_rdl/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%64%6C%6C%61%62@%61%6E%75.%65%64%75.%61%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/RDLLab", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.anu.edu.au/", "_blank");
        },
      },];
