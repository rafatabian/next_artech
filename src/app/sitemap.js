export default function sitemap() {
    const baseURL = "http://artech-agency.co"
  return [
{url: baseURL, 
    lastModified: new Date(), 
    changeFrequency: "monthly", 
    priority: 1 
}, 
{url: `${baseURL}/marketing`, 
    lastModified: new Date(), 
    changeFrequency: "monthly", 
    priority: 0.9
},
{url: `${baseURL}/websites`, 
    lastModified: new Date(), 
    changeFrequency: "monthly", 
    priority: 0.8
},
{url: `${baseURL}/plans`, 
    lastModified: new Date(), 
    changeFrequency: "monthly", 
    priority: 0.7
},
{url: `${baseURL}/branding`, 
    lastModified: new Date(), 
    changeFrequency: "monthly", 
    priority: 0.6
},
{url: `${baseURL}/contact`, 
    lastModified: new Date(), 
    changeFrequency: "monthly", 
    priority: 0.5
},
{url: `${baseURL}/help`, 
    lastModified: new Date(), 
    changeFrequency: "monthly", 
    priority: 0.4
},
{url: `${baseURL}/terms`, 
    lastModified: new Date(), 
    changeFrequency: "monthly", 
    priority: 0.3
},
{url: `${baseURL}/privacy`, 
    lastModified: new Date(), 
    changeFrequency: "monthly", 
    priority: 0.2
}
  ]
}