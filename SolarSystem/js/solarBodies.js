solarBodies = [
    {
        name: "Mercury",
        radius: 2439,               // km
        parent: "Sun",
        shineColor: 0x9999ff,
        orbit: {
            period: 87.97,          // days
            semiMajorAxis: 0.3871,  // radius of Orit 1 = Earth
            eccentricity: 0.2056,
            inclination: 7.0049
        },
        rotation: {
            period: 58.64,          // days
            inclination: 0.01,     // in degrees
            meridianAngle: 0.,
            offset: 0.
        },
        material: {
            type: "lambert",
            diffuse: {map: "res/mercury/diffuse.jpg"},
        }
    },
    {
        name: "Venus",
        radius: 6051,
        parent: "Sun",
        shineColor: 0x9999ff,
        orbit: {
            period: 224.7,
            semiMajorAxis: 0.7233,
            eccentricity: 0.0068,
            inclination: 3.3947
        },
        rotation: {
            period: -243,
            inclination: 177.36,
            meridianAngle: 0.,
            offset: 0.
        },
        material: {
            type: "lambert",
            diffuse: {map: "res/venus/diffuse.jpg"},
        },
    },
    {
        name: "Earth",
        radius: 6371,
        parent: "Sun",
        shineColor: 0x6666ff,
        orbit: {
            period: 365,
            semiMajorAxis: 1.,
            eccentricity: 0.0167,
            inclination: 0.0001
        },
        rotation: {
            period: 0.99726,
            inclination: -23.4392911,
            meridianAngle: 280.147,
            offset: 0.
        },
        material: {
            type: "phong",
            diffuse: {map: "res/earth/diffuse.jpg"},
        },
    },
    {
        name: "Moon",
        type: "moon",
        radius: 1738,
        parent: "Earth",
        shineColor: 0xff9988,
        orbit: {
            period: 27.3,
            semiMajorAxis: 200, //1
            eccentricity: 0.0549,
            inclination: 5.15
        },
        rotation: {
            period: 27.32,
            inclination: 6.7,
            meridianAngle: 0.,
            offset: 0.
        },
        material: {
            type: "lambert",
            diffuse: {map: "res/moon/diffuse.jpg"},
        }
    },
    {
        name: "Mars",
        radius: 3396,
        parent: "Sun",
        shineColor: 0xff9988,
        orbit: {
            period: 687,
            semiMajorAxis: 1.5237,
            eccentricity: 0.0934,
            inclination: 1.8506
        },
        rotation: {
            period: 1.025,
            inclination: 25.19,
            meridianAngle: 0.,
            offset: 0.
        },
        material: {
            type: "lambert",
            diffuse: {map: "res/mars/diffuse.jpg"},
        },
    },
    {
        name: "Phobos",
        radius: 11.1,
        parent: "Mars",
        shineColor: 0xff9988,
        orbit: {
            period: 1.5945,
            semiMajorAxis: 20,
            eccentricity: 0.0151,
            inclination: 1.082
        },
        rotation: {
            period: 0.31,
            inclination: 37.10,
            meridianAngle: 0.,
            offset: 0.
        },
        material: {
            type: "lambert",
            diffuse: {map: "res/phobos/diffuse.jpg"},
        }
    },
    {
        name: "Deimos",
        radius: 6.2,
        parent: "Mars",
        shineColor: 0xff9988,
        orbit: {
            period: 1.26,
            semiMajorAxis: 30,
            eccentricity: 0.00033,
            inclination: 1.791
        },
        rotation: {
            period: 150.,
            inclination: 36.48,
            meridianAngle: 0.,
            offset: 0.
        },
        material: {
            type: "lambert",
            diffuse: {map: "res/deimos/diffuse.jpg"},
        }
    },
    {
        name: "Jupiter",
        radius: 69911,
        parent: "Sun",
        shineColor: 0x9999ff,
        orbit: {
            period: 4331,
            semiMajorAxis: 5.2028,
            eccentricity: 0.0484,
            inclination: 1.3053
        },
        rotation: {
            period: 0.4135,
            inclination: 3.13,
            meridianAngle: 0.,
            offset: 0.
        },
        material: {
            type: "lambert",
            diffuse: {map: "res/jupiter/diffuse.jpg"},
        },
    },
    {
        name: "Ganymede",
        type: "moon",
        radius: 2634,
        parent: "Jupiter",
        shineColor: 0xff9988,
        orbit: {
            period: 7.15,
            semiMajorAxis: 1890, // 2.78
            eccentricity: 0.0045045,
            inclination: 0.01,
        },
        rotation: {
            period: 0.1,
            inclination: 1,
            meridianAngle: 0.,
            offset: 0.
        },
        material: {
            type: "lambert",
            diffuse: {map: "res/ganymede/diffuse.jpg"},
        }
    },
    {
        name: "Callisto",
        type: "moon",
        radius: 2410.3,
        parent: "Jupiter",
        shineColor: 0xff9988,
        orbit: {
            period: 16.68,
            semiMajorAxis: 3325, //4.89
            eccentricity: 0.0045045,
            inclination: 0.21,
        },
        rotation: {
            period: 0.695,
            inclination: 1,
            meridianAngle: 0.,
            offset: 0.
        },
        material: {
            type: "lambert",
            diffuse: {map: "res/callisto/diffuse.jpg"},
        }
    },
    {
        name: "Europa",
        type: "moon",
        radius: 1569,
        parent: "Jupiter",
        shineColor: 0xff9988,
        orbit: {
            period: 3.55,
            semiMajorAxis: 1183, // 1.74
            eccentricity: 0.0101,
            inclination: 0.46,
        },
        rotation: {
            period: 0.148,
            inclination: 1,
            meridianAngle: 0.,
            offset: 0.
        },
        material: {
            type: "lambert",
            diffuse: {map: "res/europa/diffuse.jpg"},
        }
    },
    {
        name: "Io",
        type: "moon",
        radius: 1821.6,
        parent: "Jupiter",
        shineColor: 0xff9988,
        orbit: {
            period: 1.77,
            semiMajorAxis: 750, // 1.1
            eccentricity: 0.0041,
            inclination: 0.040,
        },
        rotation: {
            period: 0.073,
            inclination: 1,
            meridianAngle: 0.,
            offset: 0.
        },
        material: {
            type: "lambert",
            diffuse: {map: "res/io/diffuse.png"},
        }
    },
    {
        name: "Saturn",
        radius: 58232,
        parent: "Sun",
        shineColor: 0x9999ff,
        orbit: {
            period: 10747,
            semiMajorAxis: 9.5826,
            eccentricity: 0.0542,
            inclination: 0//2.4845
        },
        rotation: {
            period: 0.444,
            inclination: 26.73,
            meridianAngle: 0.,
            offset: 0.
        },
        material: {
            type: "lambert",
            diffuse: {map: "res/saturn/diffuse.jpg"},
        },
        ring: {
            map: "res/saturn/ring.png",
            lower: 74500,
            higher: 120000,
        }
    },
    {
        name: "Dione",
        type: "moon",
        radius: 561,
        parent: "Saturn",
        shineColor: 0xff9988,
        orbit: {
            period:  2.74,
            semiMajorAxis: 1400, // 0.98
            eccentricity: 0.05,
            inclination: 0.0049,
        },
        rotation: {
            period: 0.114,
            inclination: 1,
            meridianAngle: 0.,
            offset: 0.
        },
        material: {
            type: "lambert",
            diffuse: {map: "res/dione/diffuse.jpg"},
        }
    },
    {
        name: "Titan",
        type: "moon",
        radius: 2575.5,
        parent: "Saturn",
        shineColor: 0xff9988,
        orbit: {
            period: 15.945,
            semiMajorAxis: 2300, //3.18
            eccentricity: 0.05,
            inclination: 0.0049,
        },
        rotation: {
            period: 0.664,
            inclination: 1,
            meridianAngle: 0.,
            offset: 0.
        },
        material: {
            type: "lambert",
            diffuse: {map: "res/titan/diffuse.jpg"},
        }
    },
    {
        name: "Uranus",
        radius: 25362,
        parent: "Sun",
        shineColor: 0x9999ff,
        orbit: {
            period: 30589,
            semiMajorAxis: 19.1818,
            eccentricity: 0.0472,
            inclination: 0 // 0.7699
        },
        rotation: {
            period: -0.718,
            inclination: 97.722,
            meridianAngle: 0.,
            offset: 0.
        },
        material: {
            type: "lambert",
            diffuse: {map: "res/uranus/diffuse.jpg"},
        },
        ring: {
            map: "res/uranus/ring.png",
            lower: 67500,
            higher: 97000,
        },
    },
    {
        name: "Neptune",
        radius: 24622,
        parent: "Sun",
        shineColor: 0x9999ff,
        orbit: {
            period: 59800,
            semiMajorAxis: 30.0685,
            eccentricity: 0.0097,
            inclination: 0 // 1.7692
        },
        rotation: {
            period: 0.67,
            inclination: 28.3,
            meridianAngle: 0.,
            offset: 0.
        },
        material: {
            type: "lambert",
            diffuse: {map: "res/neptune/diffuse.jpg"},
        },
    },
    {
        name: "Triton",
        type: "moon",
        radius: 1353,
        parent: "Neptune",
        shineColor: 0xff9988,
        orbit: {
            period: 5.88,
            semiMajorAxis: 920, // 0.92
            eccentricity: 0.1,
            inclination: 157,
        },
        rotation: {
            period: 0.1,
            inclination: 1,
            meridianAngle: 0.,
            offset: 0.
        },
        material: {
            type: "lambert",
            diffuse: {map: "res/triton/diffuse.jpg"},
        }
    },
    {
        name: "Titania",
        type: "moon",
        radius: 788,
        parent: "Uranus",
        shineColor: 0xff9988,
        orbit: {
            period: 8.71,
            semiMajorAxis: 1130, // 1.13
            eccentricity: 0.1,
            inclination: 0.34,
        },
        rotation: {
            period: 0.1,
            inclination: 1,
            meridianAngle: 0.,
            offset: 0.
        },
        material: {
            type: "lambert",
            diffuse: {map: "res/titania/diffuse.jpg"},
        }
    },
    {
        name: "Rhea",
        type: "moon",
        radius: 763,
        parent: "Saturn",
        shineColor: 0xff9988,
        orbit: {
            period: 4.52,
            semiMajorAxis: 1700, // 1.37
            eccentricity: 0.1,
            inclination: 0.34,
        },
        rotation: {
            period: 0.1,
            inclination: 1,
            meridianAngle: 0.,
            offset: 0.
        },
        material: {
            type: "lambert",
            diffuse: {map: "res/rhea/diffuse.jpg"},
        }
    },
    {
        name: "Oberon",
        type: "moon",
        radius: 761,
        parent: "Uranus",
        shineColor: 0xff9988,
        orbit: {
            period: 13.46,
            semiMajorAxis: 1520, // 1.52
            eccentricity: 0.1,
            inclination: 0.34,
        },
        rotation: {
            period: 0.1,
            inclination: 1,
            meridianAngle: 0.,
            offset: 0.
        },
        material: {
            type: "lambert",
            diffuse: {map: "res/oberon/diffuse.jpg"},
        }
    },
    {
        name: "Iapetus",
        type: "moon",
        radius: 735,
        parent: "Saturn",
        shineColor: 0xff9988,
        orbit: {
            period: 79.32,
            semiMajorAxis: 3000, // 9.27
            eccentricity: 0.1,
            inclination: 15.47,
        },
        rotation: {
            period: 0.1,
            inclination: 1,
            meridianAngle: 0.,
            offset: 0.
        },
        material: {
            type: "lambert",
            diffuse: {map: "res/iapetus/diffuse.jpg"},
        }
    },
    {
        name: "Umbriel",
        type: "moon",
        radius: 584,
        parent: "Uranus",
        shineColor: 0xff9988,
        orbit: {
            period: 4.1,
            semiMajorAxis: 690, // .69
            eccentricity: 0.1,
            inclination: 0.01,
        },
        rotation: {
            period: 0.1,
            inclination: 1,
            meridianAngle: 0.,
            offset: 0.
        },
        material: {
            type: "lambert",
            diffuse: {map: "res/umbriel/diffuse.jpg"},
        }
    },
    {
        name: "Ariel",
        type: "moon",
        radius: 578,
        parent: "Uranus",
        shineColor: 0xff9988,
        orbit: {
            period: 2.52,
            semiMajorAxis: 500, // 0.5
            eccentricity: 0.1,
            inclination: 0.01,
        },
        rotation: {
            period: 0.1,
            inclination: 1,
            meridianAngle: 0.,
            offset: 0.
        },
        material: {
            type: "lambert",
            diffuse: {map: "res/ariel/diffuse.jpg"},
        }
    },
]
