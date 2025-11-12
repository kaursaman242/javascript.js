const longObjectWithHs = {
  id: "usr_001_long_object",
  createdAt: "2025-11-12T06:22:00.000Z",
  updatedAt: "2025-11-12T06:22:00.000Z",
  profile: {
    displayName: "Prabhjit Singh",
    username: "prabhjit_s",
    contact: {
      email: "prabhjit@example.com",
      phone: "+91-9876543210",
      website: "https://example.com/prabhjit",
      socials: {
        twitter: "@prabhjit_s",
        github: "prabhjit",
        linkedin: "in/prabhjit-singh",
        college: {
          name: "Punjab Technical University",
          degree: "B.Tech",
          preferences: {
            language: "en-IN",
            timezone: "Asia/Kolkata",
            newsletter: true,
            notifications: {
              email: true,
              push: false,
              sms: false,
            },
          },
          major: "Computer Science",
          yearsAttended: { start: 2013, end: 2017 },
          cgpa: 8.7,
          projects: [
            {
              id: "p001",
              title: "Smart Attendance System",
              year: 2016,
              role: "Lead",
            },
            {
              id: "p002",
              title: "E-Commerce Demo",
              year: 2017,
              role: "Full-stack",
            },
          ],
          extracurricular: ["Coding Club", "Hackathon Participant"],
        },
      },
    },
  },
};

const {profile:{contact:{socials:{college:{projects:[,{year}]}}}}}=longObjectWithHs
console.log(year)
 
// const {profile:{contact:{socials:{college:{yearsAttended:{end:saman},preferences:{timezone}}}}} }=longObjectWithHs
// console.log(saman,timezone)

 const  arr= [23,42,52,5,2,52,66,7,3,,63635]
 const value=arr[5]
 console.log(value)
 const value1=arr[10]
 console.log(value1)


 const [,,,,,value3,,,,,value4]=arr

 console.log(value3,value4)

   const nes= [
  [23, 42, 52],
  [5, 2, 52],
  [66, 7, 3],
  [undefined, 63635]
]

const [[,one],,[,seven]]=nes
console.log(one,seven)
