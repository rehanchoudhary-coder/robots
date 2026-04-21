(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/robotics.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ─── Robotics Component Data Layer ───────────────────────────────────────────
__turbopack_context__.s([
    "categoryMeta",
    ()=>categoryMeta,
    "environments",
    ()=>environments,
    "getBestValueComponents",
    ()=>getBestValueComponents,
    "robotComponents",
    ()=>robotComponents
]);
const robotComponents = [
    // ── Brains (Microcontrollers) ──────────────────────────────────────────────
    {
        id: 'esp32-s3',
        name: 'ESP32-S3',
        category: 'brain',
        price: 15,
        performanceImpact: 'High Connectivity',
        specs: {
            'Clock Speed': '240 MHz',
            'RAM': '512 KB',
            'WiFi': '802.11 b/g/n',
            'Bluetooth': 'BLE 5.0',
            'GPIO Pins': '45'
        },
        rating: 4,
        description: 'Dual-core Xtensa processor with native WiFi and Bluetooth. Perfect for IoT robots.',
        valueScore: 26.7
    },
    {
        id: 'arduino-mega',
        name: 'Arduino Mega 2560',
        category: 'brain',
        price: 25,
        performanceImpact: 'Maximum I/O',
        specs: {
            'Clock Speed': '16 MHz',
            'RAM': '8 KB',
            'Digital Pins': '54',
            'Analog Pins': '16',
            'PWM': '15 channels'
        },
        rating: 3.5,
        description: 'The workhorse of robotics prototyping. Unmatched pin count for complex builds.',
        valueScore: 14
    },
    {
        id: 'raspberry-pi-4',
        name: 'Raspberry Pi 4B',
        category: 'brain',
        price: 55,
        performanceImpact: 'Full Linux OS',
        specs: {
            'CPU': 'Quad-core Cortex-A72',
            'RAM': '4 GB',
            'USB': '2x USB 3.0',
            'Video': 'Dual 4K HDMI',
            'GPIO': '40 pins'
        },
        rating: 5,
        description: 'A full computer for autonomous AI. Runs ROS, TensorFlow, and computer vision pipelines.',
        valueScore: 9.1
    },
    {
        id: 'teensy-41',
        name: 'Teensy 4.1',
        category: 'brain',
        price: 32,
        performanceImpact: 'Ultra-Fast Processing',
        specs: {
            'Clock Speed': '600 MHz',
            'RAM': '1 MB',
            'Flash': '8 MB',
            'USB': 'High-speed',
            'ADC': '18 channels'
        },
        rating: 4.5,
        description: 'Fastest ARM-based microcontroller. Ideal for real-time sensor fusion.',
        valueScore: 14.1
    },
    // ── Motors ─────────────────────────────────────────────────────────────────
    {
        id: 'brushless-dc',
        name: 'Brushless DC Motor',
        category: 'motor',
        price: 45,
        performanceImpact: 'High Torque',
        specs: {
            'Voltage': '12V',
            'RPM': '10,000',
            'Torque': '0.5 Nm',
            'Efficiency': '90%',
            'Weight': '120g'
        },
        rating: 4.5,
        description: 'Efficient, durable, and powerful. The standard for professional-grade robots.',
        valueScore: 10
    },
    {
        id: 'nema17-stepper',
        name: 'NEMA 17 Stepper',
        category: 'motor',
        price: 18,
        performanceImpact: 'Precision Movement',
        specs: {
            'Step Angle': '1.8°',
            'Torque': '0.44 Nm',
            'Current': '1.7A',
            'Steps/Rev': '200',
            'Weight': '280g'
        },
        rating: 4,
        description: 'Precise angular control for CNC, 3D printers and robotic arms.',
        valueScore: 22.2
    },
    {
        id: 'servo-mg996r',
        name: 'MG996R Servo',
        category: 'motor',
        price: 8,
        performanceImpact: 'Positional Control',
        specs: {
            'Torque': '11 kg·cm',
            'Speed': '0.17s/60°',
            'Voltage': '4.8-7.2V',
            'Gear': 'Metal',
            'Weight': '55g'
        },
        rating: 3.5,
        description: 'Metal-gear servo with high torque. Great for grippers and pan-tilt mechanisms.',
        valueScore: 43.75
    },
    {
        id: 'dc-gearmotor',
        name: 'DC Gearmotor 12V',
        category: 'motor',
        price: 12,
        performanceImpact: 'Balanced Drive',
        specs: {
            'RPM': '200',
            'Torque': '1.5 kg·cm',
            'Voltage': '12V',
            'Shaft': '6mm D-type',
            'Weight': '100g'
        },
        rating: 3,
        description: 'Affordable and reliable. Perfect for wheeled robot platforms.',
        valueScore: 25
    },
    // ── Sensors ────────────────────────────────────────────────────────────────
    {
        id: 'lidar-ldl06',
        name: 'LiDAR LDL-06',
        category: 'sensor',
        price: 120,
        performanceImpact: '360° Vision',
        specs: {
            'Range': '12m',
            'Scan Rate': '5-13 Hz',
            'Angular Res.': '1°',
            'Interface': 'UART',
            'Accuracy': '±2cm'
        },
        rating: 5,
        description: 'Full 360° laser scanning for SLAM navigation and obstacle mapping.',
        valueScore: 4.2
    },
    {
        id: 'imu-mpu6050',
        name: 'MPU-6050 IMU',
        category: 'sensor',
        price: 5,
        performanceImpact: 'Balance & Orientation',
        specs: {
            'Gyroscope': '±2000°/s',
            'Accelerometer': '±16g',
            'Interface': 'I2C',
            'ADC': '16-bit',
            'DMP': 'Built-in'
        },
        rating: 4,
        description: '6-axis motion tracking. Essential for balancing robots and drone stabilization.',
        valueScore: 80
    },
    {
        id: 'ultrasonic-hcsr04',
        name: 'HC-SR04 Ultrasonic',
        category: 'sensor',
        price: 3,
        performanceImpact: 'Distance Detection',
        specs: {
            'Range': '2-400cm',
            'Accuracy': '3mm',
            'Angle': '15°',
            'Frequency': '40kHz',
            'Trigger': '10μs pulse'
        },
        rating: 3,
        description: 'Simple, cheap, effective distance measurement for obstacle avoidance.',
        valueScore: 100
    },
    {
        id: 'camera-ov7670',
        name: 'OV7670 Camera',
        category: 'sensor',
        price: 10,
        performanceImpact: 'Machine Vision',
        specs: {
            'Resolution': '640x480',
            'FPS': '30',
            'Interface': 'Parallel',
            'Format': 'YUV/RGB',
            'Lens': 'Fixed focus'
        },
        rating: 3.5,
        description: 'Low-cost VGA camera module for basic computer vision applications.',
        valueScore: 35
    },
    {
        id: 'depth-camera-d435',
        name: 'Intel RealSense D435',
        category: 'sensor',
        price: 280,
        performanceImpact: '3D Depth Mapping',
        specs: {
            'Depth Range': '0.2-10m',
            'Resolution': '1280x720',
            'FPS': '90',
            'FOV': '87° x 58°',
            'Interface': 'USB 3.0'
        },
        rating: 5,
        description: 'Professional stereo depth camera for 3D environment mapping and navigation.',
        valueScore: 1.8
    },
    // ── Controllers ────────────────────────────────────────────────────────────
    {
        id: 'motor-driver-l298n',
        name: 'L298N Motor Driver',
        category: 'controller',
        price: 7,
        performanceImpact: 'Dual H-Bridge',
        specs: {
            'Channels': '2',
            'Voltage': '5-35V',
            'Current': '2A per channel',
            'PWM': 'Supported',
            'Built-in 5V': 'Regulator'
        },
        rating: 3.5,
        description: 'Classic dual H-bridge driver for DC motors and stepper motors.',
        valueScore: 50
    },
    {
        id: 'servo-driver-pca9685',
        name: 'PCA9685 16-Ch Servo',
        category: 'controller',
        price: 10,
        performanceImpact: 'Multi-Servo Control',
        specs: {
            'Channels': '16',
            'Resolution': '12-bit',
            'Interface': 'I2C',
            'Frequency': '24-1526 Hz',
            'Chainable': 'Up to 62'
        },
        rating: 4.5,
        description: '16-channel PWM driver. Control up to 992 servos with daisy-chaining.',
        valueScore: 45
    },
    // ── Power ──────────────────────────────────────────────────────────────────
    {
        id: 'lipo-3s-2200',
        name: 'LiPo 3S 2200mAh',
        category: 'power',
        price: 22,
        performanceImpact: 'High Energy Density',
        specs: {
            'Voltage': '11.1V',
            'Capacity': '2200mAh',
            'Discharge': '25C',
            'Weight': '180g',
            'Connector': 'XT60'
        },
        rating: 4,
        description: 'Lightweight, high-discharge battery for mobile robots and drones.',
        valueScore: 18.2
    },
    {
        id: 'buck-converter',
        name: 'Buck Converter 5A',
        category: 'power',
        price: 6,
        performanceImpact: 'Voltage Regulation',
        specs: {
            'Input': '4-38V',
            'Output': '1.25-36V',
            'Current': '5A max',
            'Efficiency': '96%',
            'Type': 'Step-down'
        },
        rating: 4,
        description: 'High-efficiency switchable voltage regulator for mixed-voltage systems.',
        valueScore: 66.7
    },
    // ── Chassis ────────────────────────────────────────────────────────────────
    {
        id: 'tracked-chassis',
        name: 'Tracked Tank Chassis',
        category: 'chassis',
        price: 35,
        performanceImpact: 'All-Terrain',
        specs: {
            'Material': 'Aluminum',
            'Motors': '2x included',
            'Size': '250x150mm',
            'Load': '3kg',
            'Terrain': 'All surfaces'
        },
        rating: 4,
        description: 'Aluminum tracked platform with motors. Ideal for Mars and rough terrain simulation.',
        valueScore: 11.4
    },
    {
        id: 'mecanum-platform',
        name: 'Mecanum Wheel Platform',
        category: 'chassis',
        price: 85,
        performanceImpact: 'Omnidirectional',
        specs: {
            'Wheels': '4x Mecanum',
            'Material': 'Aluminum',
            'Size': '400x300mm',
            'Load': '10kg',
            'Movement': '360° omni'
        },
        rating: 5,
        description: 'Premium omnidirectional platform. Move in any direction without turning.',
        valueScore: 5.9
    }
];
const environments = [
    {
        id: 'standby',
        name: 'Standby Mode',
        icon: '⏸',
        color: '#4F9C8F',
        frameRange: [
            1,
            40
        ],
        metrics: {
            battery: 100,
            speed: 0,
            durability: 100,
            temperature: 22,
            signal: 100
        },
        description: 'Robot is in standby mode. All systems nominal.',
        challenges: [
            'System Diagnostics',
            'Calibration Check'
        ]
    },
    {
        id: 'mars',
        name: 'Mars Surface',
        icon: '🔴',
        color: '#E85D3A',
        frameRange: [
            41,
            96
        ],
        metrics: {
            battery: 72,
            speed: 45,
            durability: 85,
            temperature: -63,
            signal: 34
        },
        description: 'Extreme cold, low gravity, iron oxide terrain. Solar interference affects comms.',
        challenges: [
            'Dust Storms',
            'Low Gravity',
            'Radiation Exposure'
        ]
    },
    {
        id: 'deepsea',
        name: 'Deep Sea',
        icon: '🌊',
        color: '#1E6F9F',
        frameRange: [
            97,
            144
        ],
        metrics: {
            battery: 58,
            speed: 30,
            durability: 65,
            temperature: 2,
            signal: 12
        },
        description: 'Crushing pressure, zero visibility, corrosive saltwater environment.',
        challenges: [
            'Pressure (1000 ATM)',
            'Corrosion',
            'No GPS Signal'
        ]
    },
    {
        id: 'factory',
        name: 'Smart Factory',
        icon: '🏭',
        color: '#D4A574',
        frameRange: [
            145,
            192
        ],
        metrics: {
            battery: 95,
            speed: 88,
            durability: 92,
            temperature: 35,
            signal: 98
        },
        description: 'High-speed assembly line. Precision and repeatability are critical.',
        challenges: [
            'Collision Avoidance',
            'Sync Timing',
            'Heat Dissipation'
        ]
    }
];
function getBestValueComponents(budget) {
    const categories = [
        'brain',
        'motor',
        'sensor',
        'controller',
        'power',
        'chassis'
    ];
    const selected = [];
    let totalCost = 0;
    for (const category of categories){
        const available = robotComponents.filter((c)=>c.category === category && c.price <= budget - totalCost).sort((a, b)=>b.valueScore - a.valueScore);
        if (available.length > 0) {
            selected.push(available[0]);
            totalCost += available[0].price;
        }
    }
    return {
        components: selected,
        totalCost,
        remaining: budget - totalCost
    };
}
const categoryMeta = {
    brain: {
        label: 'Brain (MCU)',
        icon: '🧠',
        color: '#A78BFA'
    },
    motor: {
        label: 'Motors',
        icon: '⚡',
        color: '#F59E0B'
    },
    sensor: {
        label: 'Sensors',
        icon: '📡',
        color: '#3B82F6'
    },
    controller: {
        label: 'Controllers',
        icon: '🎛️',
        color: '#10B981'
    },
    power: {
        label: 'Power',
        icon: '🔋',
        color: '#EF4444'
    },
    chassis: {
        label: 'Chassis',
        icon: '🤖',
        color: '#8B5CF6'
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/EnvironmentMetrics.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EnvironmentMetrics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$robotics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/robotics.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function MetricBar({ label, value, maxValue, unit, color, icon }) {
    const percentage = Math.max(0, Math.min(100, value / maxValue * 100));
    const isWarning = percentage < 30;
    const isCritical = percentage < 15;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg",
                                children: icon
                            }, void 0, false, {
                                fileName: "[project]/src/components/EnvironmentMetrics.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-400 text-sm font-mono uppercase tracking-wider",
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/src/components/EnvironmentMetrics.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/EnvironmentMetrics.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        className: "font-mono text-sm font-bold",
                        style: {
                            color: isCritical ? '#EF4444' : isWarning ? '#F59E0B' : color
                        },
                        initial: {
                            scale: 1.3,
                            opacity: 0
                        },
                        animate: {
                            scale: 1,
                            opacity: 1
                        },
                        transition: {
                            duration: 0.3
                        },
                        children: [
                            typeof value === 'number' && value < 0 ? '' : '',
                            value,
                            unit
                        ]
                    }, value, true, {
                        fileName: "[project]/src/components/EnvironmentMetrics.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/EnvironmentMetrics.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-2 bg-[#1a2235] rounded-full overflow-hidden relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "h-full rounded-full relative",
                        initial: {
                            width: 0
                        },
                        animate: {
                            width: `${percentage}%`
                        },
                        transition: {
                            type: 'spring',
                            stiffness: 60,
                            damping: 20
                        },
                        style: {
                            background: isCritical ? 'linear-gradient(90deg, #EF4444, #DC2626)' : isWarning ? 'linear-gradient(90deg, #F59E0B, #D97706)' : `linear-gradient(90deg, ${color}80, ${color})`,
                            boxShadow: `0 0 20px ${isCritical ? '#EF4444' : color}40`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/EnvironmentMetrics.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    isCritical && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute inset-0 rounded-full",
                        animate: {
                            opacity: [
                                0.5,
                                0,
                                0.5
                            ]
                        },
                        transition: {
                            repeat: Infinity,
                            duration: 1
                        },
                        style: {
                            background: '#EF444420'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/EnvironmentMetrics.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/EnvironmentMetrics.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/EnvironmentMetrics.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = MetricBar;
function EnvironmentMetrics() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: sectionRef,
        offset: [
            'start end',
            'end start'
        ]
    });
    const springProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(scrollYProgress, {
        stiffness: 100,
        damping: 30
    });
    const opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(springProgress, [
        0,
        0.2,
        0.8,
        1
    ], [
        0,
        1,
        1,
        0
    ]);
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(springProgress, [
        0,
        0.2,
        0.8,
        1
    ], [
        80,
        0,
        0,
        -80
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
        ref: sectionRef,
        className: "relative py-32 px-6",
        style: {
            opacity,
            y
        },
        id: "environment-metrics",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "text-center mb-20",
                    initial: {
                        opacity: 0,
                        y: 40
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.8
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-6xl font-black text-white mb-4 tracking-tight",
                            children: [
                                "ENVIRONMENT",
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-transparent bg-clip-text bg-gradient-to-r from-[#4F9C8F] to-[#D4A574]",
                                    children: "ANALYSIS"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EnvironmentMetrics.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/EnvironmentMetrics.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 text-lg max-w-2xl mx-auto font-mono tracking-wide",
                            children: "Performance metrics across extreme operational environments"
                        }, void 0, false, {
                            fileName: "[project]/src/components/EnvironmentMetrics.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/EnvironmentMetrics.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$robotics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["environments"].map((env, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "relative group",
                            initial: {
                                opacity: 0,
                                y: 60
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                margin: '-50px'
                            },
                            transition: {
                                duration: 0.6,
                                delay: index * 0.15
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative bg-[#0D1321]/90 backdrop-blur-xl border border-white/5 rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:border-opacity-30",
                                style: {
                                    borderColor: `${env.color}20`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700",
                                        style: {
                                            background: env.color
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/EnvironmentMetrics.tsx",
                                        lineNumber: 132,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border",
                                                        style: {
                                                            background: `${env.color}10`,
                                                            borderColor: `${env.color}30`
                                                        },
                                                        children: env.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EnvironmentMetrics.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-white font-bold text-xl",
                                                                children: env.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EnvironmentMetrics.tsx",
                                                                lineNumber: 150,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-500 text-sm font-mono",
                                                                children: [
                                                                    "Frames ",
                                                                    env.frameRange[0],
                                                                    "-",
                                                                    env.frameRange[1]
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/EnvironmentMetrics.tsx",
                                                                lineNumber: 151,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/EnvironmentMetrics.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/EnvironmentMetrics.tsx",
                                                lineNumber: 139,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider",
                                                style: {
                                                    background: `${env.color}15`,
                                                    color: env.color,
                                                    border: `1px solid ${env.color}30`
                                                },
                                                children: env.id === 'standby' ? 'IDLE' : 'ACTIVE'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EnvironmentMetrics.tsx",
                                                lineNumber: 156,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EnvironmentMetrics.tsx",
                                        lineNumber: 138,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricBar, {
                                                label: "Battery",
                                                value: env.metrics.battery,
                                                maxValue: 100,
                                                unit: "%",
                                                color: env.color,
                                                icon: "🔋"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EnvironmentMetrics.tsx",
                                                lineNumber: 170,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricBar, {
                                                label: "Speed",
                                                value: env.metrics.speed,
                                                maxValue: 100,
                                                unit: " km/h",
                                                color: env.color,
                                                icon: "⚡"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EnvironmentMetrics.tsx",
                                                lineNumber: 178,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricBar, {
                                                label: "Durability",
                                                value: env.metrics.durability,
                                                maxValue: 100,
                                                unit: "%",
                                                color: env.color,
                                                icon: "🛡️"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EnvironmentMetrics.tsx",
                                                lineNumber: 186,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricBar, {
                                                label: "Temperature",
                                                value: env.metrics.temperature,
                                                maxValue: 100,
                                                unit: "°C",
                                                color: env.color,
                                                icon: "🌡️"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EnvironmentMetrics.tsx",
                                                lineNumber: 194,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricBar, {
                                                label: "Signal",
                                                value: env.metrics.signal,
                                                maxValue: 100,
                                                unit: "%",
                                                color: env.color,
                                                icon: "📶"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EnvironmentMetrics.tsx",
                                                lineNumber: 202,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EnvironmentMetrics.tsx",
                                        lineNumber: 169,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8 pt-6 border-t border-white/5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-500 text-xs font-mono mb-3 uppercase tracking-wider",
                                                children: "Challenges"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EnvironmentMetrics.tsx",
                                                lineNumber: 214,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: env.challenges.map((challenge)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-3 py-1.5 rounded-lg text-xs font-mono",
                                                        style: {
                                                            background: `${env.color}08`,
                                                            color: `${env.color}CC`,
                                                            border: `1px solid ${env.color}15`
                                                        },
                                                        children: challenge
                                                    }, challenge, false, {
                                                        fileName: "[project]/src/components/EnvironmentMetrics.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EnvironmentMetrics.tsx",
                                                lineNumber: 217,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EnvironmentMetrics.tsx",
                                        lineNumber: 213,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/EnvironmentMetrics.tsx",
                                lineNumber: 125,
                                columnNumber: 15
                            }, this)
                        }, env.id, false, {
                            fileName: "[project]/src/components/EnvironmentMetrics.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/EnvironmentMetrics.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/EnvironmentMetrics.tsx",
            lineNumber: 94,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/EnvironmentMetrics.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_s(EnvironmentMetrics, "sJ8bllVNiS8ngZJW2N94NgsL8lI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c1 = EnvironmentMetrics;
var _c, _c1;
__turbopack_context__.k.register(_c, "MetricBar");
__turbopack_context__.k.register(_c1, "EnvironmentMetrics");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/EnvironmentMetrics.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/EnvironmentMetrics.tsx [app-client] (ecmascript)"));
}),
"[project]/node_modules/motion-dom/dist/es/scroll/observe.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "observeTimeline",
    ()=>observeTimeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
;
function observeTimeline(update, timeline) {
    let prevProgress;
    const onFrame = ()=>{
        const { currentTime } = timeline;
        const percentage = currentTime === null ? 0 : currentTime.value;
        const progress = percentage / 100;
        if (prevProgress !== progress) {
            update(progress);
        }
        prevProgress = progress;
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].preUpdate(onFrame, true);
    return ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"])(onFrame);
}
;
}),
"[project]/node_modules/framer-motion/dist/es/render/dom/scroll/utils/can-use-native-timeline.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canUseNativeTimeline",
    ()=>canUseNativeTimeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$scroll$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs [app-client] (ecmascript)");
;
function canUseNativeTimeline(target) {
    if (typeof window === "undefined") return false;
    return target ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$scroll$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsViewTimeline"])() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$scroll$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsScrollTimeline"])();
}
;
}),
"[project]/node_modules/framer-motion/dist/es/render/dom/scroll/info.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createScrollInfo",
    ()=>createScrollInfo,
    "updateScrollInfo",
    ()=>updateScrollInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-utils/dist/es/progress.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$velocity$2d$per$2d$second$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-utils/dist/es/velocity-per-second.mjs [app-client] (ecmascript)");
;
/**
 * A time in milliseconds, beyond which we consider the scroll velocity to be 0.
 */ const maxElapsed = 50;
const createAxisInfo = ()=>({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0
    });
const createScrollInfo = ()=>({
        time: 0,
        x: createAxisInfo(),
        y: createAxisInfo()
    });
const keys = {
    x: {
        length: "Width",
        position: "Left"
    },
    y: {
        length: "Height",
        position: "Top"
    }
};
function updateAxisInfo(element, axisName, info, time) {
    const axis = info[axisName];
    const { length, position } = keys[axisName];
    const prev = axis.current;
    const prevTime = info.time;
    axis.current = Math.abs(element[`scroll${position}`]);
    axis.scrollLength = element[`scroll${length}`] - element[`client${length}`];
    axis.offset.length = 0;
    axis.offset[0] = 0;
    axis.offset[1] = axis.scrollLength;
    axis.progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progress"])(0, axis.scrollLength, axis.current);
    const elapsed = time - prevTime;
    axis.velocity = elapsed > maxElapsed ? 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$velocity$2d$per$2d$second$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["velocityPerSecond"])(axis.current - prev, elapsed);
}
function updateScrollInfo(element, info, time) {
    updateAxisInfo(element, "x", info, time);
    updateAxisInfo(element, "y", info, time);
    info.time = time;
}
;
}),
"[project]/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/inset.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calcInset",
    ()=>calcInset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$html$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/utils/is-html-element.mjs [app-client] (ecmascript)");
;
function calcInset(element, container) {
    const inset = {
        x: 0,
        y: 0
    };
    let current = element;
    while(current && current !== container){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$html$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(current)) {
            inset.x += current.offsetLeft;
            inset.y += current.offsetTop;
            current = current.offsetParent;
        } else if (current.tagName === "svg") {
            /**
             * This isn't an ideal approach to measuring the offset of <svg /> tags.
             * It would be preferable, given they behave like HTMLElements in most ways
             * to use offsetLeft/Top. But these don't exist on <svg />. Likewise we
             * can't use .getBBox() like most SVG elements as these provide the offset
             * relative to the SVG itself, which for <svg /> is usually 0x0.
             */ const svgBoundingBox = current.getBoundingClientRect();
            current = current.parentElement;
            const parentBoundingBox = current.getBoundingClientRect();
            inset.x += svgBoundingBox.left - parentBoundingBox.left;
            inset.y += svgBoundingBox.top - parentBoundingBox.top;
        } else if (current instanceof SVGGraphicsElement) {
            const { x, y } = current.getBBox();
            inset.x += x;
            inset.y += y;
            let svg = null;
            let parent = current.parentNode;
            while(!svg){
                if (parent.tagName === "svg") {
                    svg = parent;
                }
                parent = current.parentNode;
            }
            current = svg;
        } else {
            break;
        }
    }
    return inset;
}
;
}),
"[project]/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/edge.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "namedEdges",
    ()=>namedEdges,
    "resolveEdge",
    ()=>resolveEdge
]);
const namedEdges = {
    start: 0,
    center: 0.5,
    end: 1
};
function resolveEdge(edge, length, inset = 0) {
    let delta = 0;
    /**
     * If we have this edge defined as a preset, replace the definition
     * with the numerical value.
     */ if (edge in namedEdges) {
        edge = namedEdges[edge];
    }
    /**
     * Handle unit values
     */ if (typeof edge === "string") {
        const asNumber = parseFloat(edge);
        if (edge.endsWith("px")) {
            delta = asNumber;
        } else if (edge.endsWith("%")) {
            edge = asNumber / 100;
        } else if (edge.endsWith("vw")) {
            delta = asNumber / 100 * document.documentElement.clientWidth;
        } else if (edge.endsWith("vh")) {
            delta = asNumber / 100 * document.documentElement.clientHeight;
        } else {
            edge = asNumber;
        }
    }
    /**
     * If the edge is defined as a number, handle as a progress value.
     */ if (typeof edge === "number") {
        delta = length * edge;
    }
    return inset + delta;
}
;
}),
"[project]/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/offset.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveOffset",
    ()=>resolveOffset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$edge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/edge.mjs [app-client] (ecmascript)");
;
const defaultOffset = [
    0,
    0
];
function resolveOffset(offset, containerLength, targetLength, targetInset) {
    let offsetDefinition = Array.isArray(offset) ? offset : defaultOffset;
    let targetPoint = 0;
    let containerPoint = 0;
    if (typeof offset === "number") {
        /**
         * If we're provided offset: [0, 0.5, 1] then each number x should become
         * [x, x], so we default to the behaviour of mapping 0 => 0 of both target
         * and container etc.
         */ offsetDefinition = [
            offset,
            offset
        ];
    } else if (typeof offset === "string") {
        offset = offset.trim();
        if (offset.includes(" ")) {
            offsetDefinition = offset.split(" ");
        } else {
            /**
             * If we're provided a definition like "100px" then we want to apply
             * that only to the top of the target point, leaving the container at 0.
             * Whereas a named offset like "end" should be applied to both.
             */ offsetDefinition = [
                offset,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$edge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["namedEdges"][offset] ? offset : `0`
            ];
        }
    }
    targetPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$edge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEdge"])(offsetDefinition[0], targetLength, targetInset);
    containerPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$edge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEdge"])(offsetDefinition[1], containerLength);
    return targetPoint - containerPoint;
}
;
}),
"[project]/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/presets.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollOffset",
    ()=>ScrollOffset
]);
const ScrollOffset = {
    Enter: [
        [
            0,
            1
        ],
        [
            1,
            1
        ]
    ],
    Exit: [
        [
            0,
            0
        ],
        [
            1,
            0
        ]
    ],
    Any: [
        [
            1,
            0
        ],
        [
            0,
            1
        ]
    ],
    All: [
        [
            0,
            0
        ],
        [
            1,
            1
        ]
    ]
};
;
}),
"[project]/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveOffsets",
    ()=>resolveOffsets
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$interpolate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/utils/interpolate.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$offsets$2f$default$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-utils/dist/es/clamp.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$inset$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/inset.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$offset$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/offset.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$presets$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/presets.mjs [app-client] (ecmascript)");
;
;
;
;
;
const point = {
    x: 0,
    y: 0
};
function getTargetSize(target) {
    return "getBBox" in target && target.tagName !== "svg" ? target.getBBox() : {
        width: target.clientWidth,
        height: target.clientHeight
    };
}
function resolveOffsets(container, info, options) {
    const { offset: offsetDefinition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$presets$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollOffset"].All } = options;
    const { target = container, axis = "y" } = options;
    const lengthLabel = axis === "y" ? "height" : "width";
    const inset = target !== container ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$inset$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcInset"])(target, container) : point;
    /**
     * Measure the target and container. If they're the same thing then we
     * use the container's scrollWidth/Height as the target, from there
     * all other calculations can remain the same.
     */ const targetSize = target === container ? {
        width: container.scrollWidth,
        height: container.scrollHeight
    } : getTargetSize(target);
    const containerSize = {
        width: container.clientWidth,
        height: container.clientHeight
    };
    /**
     * Reset the length of the resolved offset array rather than creating a new one.
     * TODO: More reusable data structures for targetSize/containerSize would also be good.
     */ info[axis].offset.length = 0;
    /**
     * Populate the offset array by resolving the user's offset definition into
     * a list of pixel scroll offets.
     */ let hasChanged = !info[axis].interpolate;
    const numOffsets = offsetDefinition.length;
    for(let i = 0; i < numOffsets; i++){
        const offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$offset$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveOffset"])(offsetDefinition[i], containerSize[lengthLabel], targetSize[lengthLabel], inset[axis]);
        if (!hasChanged && offset !== info[axis].interpolatorOffsets[i]) {
            hasChanged = true;
        }
        info[axis].offset[i] = offset;
    }
    /**
     * If the pixel scroll offsets have changed, create a new interpolator function
     * to map scroll value into a progress.
     */ if (hasChanged) {
        info[axis].interpolate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$interpolate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpolate"])(info[axis].offset, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$offsets$2f$default$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultOffset"])(offsetDefinition), {
            clamp: false
        });
        info[axis].interpolatorOffsets = [
            ...info[axis].offset
        ];
    }
    info[axis].progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(0, 1, info[axis].interpolate(info[axis].current));
}
;
}),
"[project]/node_modules/framer-motion/dist/es/render/dom/scroll/on-scroll-handler.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createOnScrollHandler",
    ()=>createOnScrollHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$warn$2d$once$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-utils/dist/es/warn-once.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/scroll/info.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/index.mjs [app-client] (ecmascript)");
;
;
;
function measure(container, target = container, info) {
    /**
     * Find inset of target within scrollable container
     */ info.x.targetOffset = 0;
    info.y.targetOffset = 0;
    if (target !== container) {
        let node = target;
        while(node && node !== container){
            info.x.targetOffset += node.offsetLeft;
            info.y.targetOffset += node.offsetTop;
            node = node.offsetParent;
        }
    }
    info.x.targetLength = target === container ? target.scrollWidth : target.clientWidth;
    info.y.targetLength = target === container ? target.scrollHeight : target.clientHeight;
    info.x.containerLength = container.clientWidth;
    info.y.containerLength = container.clientHeight;
    /**
     * In development mode ensure scroll containers aren't position: static as this makes
     * it difficult to measure their relative positions.
     */ if ("TURBOPACK compile-time truthy", 1) {
        if (container && target && target !== container) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$warn$2d$once$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warnOnce"])(getComputedStyle(container).position !== "static", "Please ensure that the container has a non-static position, like 'relative', 'fixed', or 'absolute' to ensure scroll offset is calculated correctly.");
        }
    }
}
function createOnScrollHandler(element, onScroll, info, options = {}) {
    return {
        measure: (time)=>{
            measure(element, options.target, info);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateScrollInfo"])(element, info, time);
            if (options.offset || options.target) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveOffsets"])(element, info, options);
            }
        },
        notify: ()=>onScroll(info)
    };
}
;
}),
"[project]/node_modules/framer-motion/dist/es/render/dom/scroll/track.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scrollInfo",
    ()=>scrollInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$resize$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/resize/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/scroll/info.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$on$2d$scroll$2d$handler$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/scroll/on-scroll-handler.mjs [app-client] (ecmascript)");
;
;
;
;
const scrollListeners = new WeakMap();
const resizeListeners = new WeakMap();
const onScrollHandlers = new WeakMap();
const scrollSize = new WeakMap();
const dimensionCheckProcesses = new WeakMap();
const getEventTarget = (element)=>element === document.scrollingElement ? window : element;
function scrollInfo(onScroll, { container = document.scrollingElement, trackContentSize = false, ...options } = {}) {
    if (!container) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
    let containerHandlers = onScrollHandlers.get(container);
    /**
     * Get the onScroll handlers for this container.
     * If one isn't found, create a new one.
     */ if (!containerHandlers) {
        containerHandlers = new Set();
        onScrollHandlers.set(container, containerHandlers);
    }
    /**
     * Create a new onScroll handler for the provided callback.
     */ const info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createScrollInfo"])();
    const containerHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$on$2d$scroll$2d$handler$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createOnScrollHandler"])(container, onScroll, info, options);
    containerHandlers.add(containerHandler);
    /**
     * Check if there's a scroll event listener for this container.
     * If not, create one.
     */ if (!scrollListeners.has(container)) {
        const measureAll = ()=>{
            for (const handler of containerHandlers){
                handler.measure(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameData"].timestamp);
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].preUpdate(notifyAll);
        };
        const notifyAll = ()=>{
            for (const handler of containerHandlers){
                handler.notify();
            }
        };
        const listener = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].read(measureAll);
        scrollListeners.set(container, listener);
        const target = getEventTarget(container);
        window.addEventListener("resize", listener);
        if (container !== document.documentElement) {
            resizeListeners.set(container, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$resize$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resize"])(container, listener));
        }
        target.addEventListener("scroll", listener);
        listener();
    }
    /**
     * Enable content size tracking if requested and not already enabled.
     */ if (trackContentSize && !dimensionCheckProcesses.has(container)) {
        const listener = scrollListeners.get(container);
        // Store initial scroll dimensions (object is reused to avoid allocation)
        const size = {
            width: container.scrollWidth,
            height: container.scrollHeight
        };
        scrollSize.set(container, size);
        // Add frame-based scroll dimension checking to detect content changes
        const checkScrollDimensions = ()=>{
            const newWidth = container.scrollWidth;
            const newHeight = container.scrollHeight;
            if (size.width !== newWidth || size.height !== newHeight) {
                listener();
                size.width = newWidth;
                size.height = newHeight;
            }
        };
        // Schedule with keepAlive=true to run every frame
        const dimensionCheckProcess = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].read(checkScrollDimensions, true);
        dimensionCheckProcesses.set(container, dimensionCheckProcess);
    }
    const listener = scrollListeners.get(container);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].read(listener, false, true);
    return ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"])(listener);
        /**
         * Check if we even have any handlers for this container.
         */ const currentHandlers = onScrollHandlers.get(container);
        if (!currentHandlers) return;
        currentHandlers.delete(containerHandler);
        if (currentHandlers.size) return;
        /**
         * If no more handlers, remove the scroll listener too.
         */ const scrollListener = scrollListeners.get(container);
        scrollListeners.delete(container);
        if (scrollListener) {
            getEventTarget(container).removeEventListener("scroll", scrollListener);
            resizeListeners.get(container)?.();
            window.removeEventListener("resize", scrollListener);
        }
        // Clean up scroll dimension checking
        const dimensionCheckProcess = dimensionCheckProcesses.get(container);
        if (dimensionCheckProcess) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"])(dimensionCheckProcess);
            dimensionCheckProcesses.delete(container);
        }
        scrollSize.delete(container);
    };
}
;
}),
"[project]/node_modules/framer-motion/dist/es/render/dom/scroll/utils/offset-to-range.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "offsetToViewTimelineRange",
    ()=>offsetToViewTimelineRange
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$presets$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/presets.mjs [app-client] (ecmascript)");
;
/**
 * Maps from ProgressIntersection pairs used by Motion's preset offsets to
 * ViewTimeline named ranges. Returns undefined for unrecognised patterns,
 * which signals the caller to fall back to JS-based scroll tracking.
 */ const presets = [
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$presets$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollOffset"].Enter,
        "entry"
    ],
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$presets$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollOffset"].Exit,
        "exit"
    ],
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$presets$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollOffset"].Any,
        "cover"
    ],
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$presets$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollOffset"].All,
        "contain"
    ]
];
const stringToProgress = {
    start: 0,
    end: 1
};
function parseStringOffset(s) {
    const parts = s.trim().split(/\s+/);
    if (parts.length !== 2) return undefined;
    const a = stringToProgress[parts[0]];
    const b = stringToProgress[parts[1]];
    if (a === undefined || b === undefined) return undefined;
    return [
        a,
        b
    ];
}
function normaliseOffset(offset) {
    if (offset.length !== 2) return undefined;
    const result = [];
    for (const item of offset){
        if (Array.isArray(item)) {
            result.push(item);
        } else if (typeof item === "string") {
            const parsed = parseStringOffset(item);
            if (!parsed) return undefined;
            result.push(parsed);
        } else {
            return undefined;
        }
    }
    return result;
}
function matchesPreset(offset, preset) {
    const normalised = normaliseOffset(offset);
    if (!normalised) return false;
    for(let i = 0; i < 2; i++){
        const o = normalised[i];
        const p = preset[i];
        if (o[0] !== p[0] || o[1] !== p[1]) return false;
    }
    return true;
}
function offsetToViewTimelineRange(offset) {
    if (!offset) {
        return {
            rangeStart: "contain 0%",
            rangeEnd: "contain 100%"
        };
    }
    for (const [preset, name] of presets){
        if (matchesPreset(offset, preset)) {
            return {
                rangeStart: `${name} 0%`,
                rangeEnd: `${name} 100%`
            };
        }
    }
    return undefined;
}
;
}),
"[project]/node_modules/framer-motion/dist/es/render/dom/scroll/utils/get-timeline.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTimeline",
    ()=>getTimeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$track$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/scroll/track.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$can$2d$use$2d$native$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/scroll/utils/can-use-native-timeline.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$offset$2d$to$2d$range$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/scroll/utils/offset-to-range.mjs [app-client] (ecmascript)");
;
;
;
const timelineCache = new Map();
function scrollTimelineFallback(options) {
    const currentTime = {
        value: 0
    };
    const cancel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$track$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollInfo"])((info)=>{
        currentTime.value = info[options.axis].progress * 100;
    }, options);
    return {
        currentTime,
        cancel
    };
}
function getTimeline({ source, container, ...options }) {
    const { axis } = options;
    if (source) container = source;
    let containerCache = timelineCache.get(container);
    if (!containerCache) {
        containerCache = new Map();
        timelineCache.set(container, containerCache);
    }
    const targetKey = options.target ?? "self";
    let targetCache = containerCache.get(targetKey);
    if (!targetCache) {
        targetCache = {};
        containerCache.set(targetKey, targetCache);
    }
    const axisKey = axis + (options.offset ?? []).join(",");
    if (!targetCache[axisKey]) {
        if (options.target && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$can$2d$use$2d$native$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canUseNativeTimeline"])(options.target)) {
            const range = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$offset$2d$to$2d$range$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["offsetToViewTimelineRange"])(options.offset);
            if (range) {
                targetCache[axisKey] = new ViewTimeline({
                    subject: options.target,
                    axis
                });
            } else {
                targetCache[axisKey] = scrollTimelineFallback({
                    container,
                    ...options
                });
            }
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$can$2d$use$2d$native$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canUseNativeTimeline"])()) {
            targetCache[axisKey] = new ScrollTimeline({
                source: container,
                axis
            });
        } else {
            targetCache[axisKey] = scrollTimelineFallback({
                container,
                ...options
            });
        }
    }
    return targetCache[axisKey];
}
;
}),
"[project]/node_modules/framer-motion/dist/es/render/dom/scroll/attach-animation.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "attachToAnimation",
    ()=>attachToAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$scroll$2f$observe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/scroll/observe.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$can$2d$use$2d$native$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/scroll/utils/can-use-native-timeline.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$get$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/scroll/utils/get-timeline.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$offset$2d$to$2d$range$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/scroll/utils/offset-to-range.mjs [app-client] (ecmascript)");
;
;
;
;
function attachToAnimation(animation, options) {
    const timeline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$get$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTimeline"])(options);
    const range = options.target ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$offset$2d$to$2d$range$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["offsetToViewTimelineRange"])(options.offset) : undefined;
    /**
     * Use native timeline when:
     * - No target: ScrollTimeline (existing behaviour)
     * - Target with mappable offset: ViewTimeline with named range
     * - Target with unmappable offset: fall back to JS observe
     */ const useNative = options.target ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$can$2d$use$2d$native$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canUseNativeTimeline"])(options.target) && !!range : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$can$2d$use$2d$native$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canUseNativeTimeline"])();
    return animation.attachTimeline({
        timeline: useNative ? timeline : undefined,
        ...range && useNative && {
            rangeStart: range.rangeStart,
            rangeEnd: range.rangeEnd
        },
        observe: (valueAnimation)=>{
            valueAnimation.pause();
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$scroll$2f$observe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observeTimeline"])((progress)=>{
                valueAnimation.time = valueAnimation.iterationDuration * progress;
            }, timeline);
        }
    });
}
;
}),
"[project]/node_modules/framer-motion/dist/es/render/dom/scroll/attach-function.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "attachToFunction",
    ()=>attachToFunction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$scroll$2f$observe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/scroll/observe.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$track$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/scroll/track.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$get$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/scroll/utils/get-timeline.mjs [app-client] (ecmascript)");
;
;
;
/**
 * If the onScroll function has two arguments, it's expecting
 * more specific information about the scroll from scrollInfo.
 */ function isOnScrollWithInfo(onScroll) {
    return onScroll.length === 2;
}
function attachToFunction(onScroll, options) {
    if (isOnScrollWithInfo(onScroll)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$track$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollInfo"])((info)=>{
            onScroll(info[options.axis].progress, info);
        }, options);
    } else {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$scroll$2f$observe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observeTimeline"])(onScroll, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$get$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTimeline"])(options));
    }
}
;
}),
"[project]/node_modules/framer-motion/dist/es/render/dom/scroll/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scroll",
    ()=>scroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$attach$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/scroll/attach-animation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$attach$2d$function$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/scroll/attach-function.mjs [app-client] (ecmascript)");
;
;
;
function scroll(onScroll, { axis = "y", container = document.scrollingElement, ...options } = {}) {
    if (!container) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
    const optionsWithDefaults = {
        axis,
        container,
        ...options
    };
    return typeof onScroll === "function" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$attach$2d$function$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attachToFunction"])(onScroll, optionsWithDefaults) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$attach$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attachToAnimation"])(onScroll, optionsWithDefaults);
}
;
}),
"[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScroll",
    ()=>useScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$scroll$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/value/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/scroll/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$offset$2d$to$2d$range$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/scroll/utils/offset-to-range.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const createScrollMotionValues = ()=>({
        scrollX: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionValue"])(0),
        scrollY: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionValue"])(0),
        scrollXProgress: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionValue"])(0),
        scrollYProgress: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionValue"])(0)
    });
const isRefPending = (ref)=>{
    if (!ref) return false;
    return !ref.current;
};
function makeAccelerateConfig(axis, options, container, target) {
    return {
        factory: (animation)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scroll"])(animation, {
                ...options,
                axis,
                container: container?.current || undefined,
                target: target?.current || undefined
            }),
        times: [
            0,
            1
        ],
        keyframes: [
            0,
            1
        ],
        ease: (v)=>v,
        duration: 1
    };
}
function canAccelerateScroll(target, offset) {
    if (typeof window === "undefined") return false;
    return target ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$scroll$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsViewTimeline"])() && !!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$offset$2d$to$2d$range$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["offsetToViewTimelineRange"])(offset) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$scroll$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsScrollTimeline"])();
}
function useScroll({ container, target, ...options } = {}) {
    const values = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])(createScrollMotionValues);
    if (canAccelerateScroll(target, options.offset)) {
        values.scrollXProgress.accelerate = makeAccelerateConfig("x", options, container, target);
        values.scrollYProgress.accelerate = makeAccelerateConfig("y", options, container, target);
    }
    const scrollAnimation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const needsStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useScroll.useCallback[start]": ()=>{
            scrollAnimation.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scroll"])({
                "useScroll.useCallback[start]": (_progress, { x, y })=>{
                    values.scrollX.set(x.current);
                    values.scrollXProgress.set(x.progress);
                    values.scrollY.set(y.current);
                    values.scrollYProgress.set(y.progress);
                }
            }["useScroll.useCallback[start]"], {
                ...options,
                container: container?.current || undefined,
                target: target?.current || undefined
            });
            return ({
                "useScroll.useCallback[start]": ()=>{
                    scrollAnimation.current?.();
                }
            })["useScroll.useCallback[start]"];
        }
    }["useScroll.useCallback[start]"], [
        container,
        target,
        JSON.stringify(options.offset)
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "useScroll.useIsomorphicLayoutEffect": ()=>{
            needsStart.current = false;
            if (isRefPending(container) || isRefPending(target)) {
                needsStart.current = true;
                return;
            } else {
                return start();
            }
        }
    }["useScroll.useIsomorphicLayoutEffect"], [
        start
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScroll.useEffect": ()=>{
            if (needsStart.current) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(!isRefPending(container), "Container ref is defined but not hydrated", "use-scroll-ref");
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(!isRefPending(target), "Target ref is defined but not hydrated", "use-scroll-ref");
                return start();
            } else {
                return;
            }
        }
    }["useScroll.useEffect"], [
        start
    ]);
    return values;
}
;
}),
"[project]/node_modules/motion-dom/dist/es/utils/transform.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "transform",
    ()=>transform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$interpolate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/utils/interpolate.mjs [app-client] (ecmascript)");
;
function transform(...args) {
    const useImmediate = !Array.isArray(args[0]);
    const argOffset = useImmediate ? 0 : -1;
    const inputValue = args[0 + argOffset];
    const inputRange = args[1 + argOffset];
    const outputRange = args[2 + argOffset];
    const options = args[3 + argOffset];
    const interpolator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$interpolate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpolate"])(inputRange, outputRange, options);
    return useImmediate ? interpolator(inputValue) : interpolator;
}
;
}),
"[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMotionValue",
    ()=>useMotionValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/value/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
/**
 * Creates a `MotionValue` to track the state and velocity of a value.
 *
 * Usually, these are created automatically. For advanced use-cases, like use with `useTransform`, you can create `MotionValue`s externally and pass them into the animated component via the `style` prop.
 *
 * ```jsx
 * export const MyComponent = () => {
 *   const scale = useMotionValue(1)
 *
 *   return <motion.div style={{ scale }} />
 * }
 * ```
 *
 * @param initial - The initial state.
 *
 * @public
 */ function useMotionValue(initial) {
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])({
        "useMotionValue.useConstant[value]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionValue"])(initial)
    }["useMotionValue.useConstant[value]"]);
    /**
     * If this motion value is being used in static mode, like on
     * the Framer canvas, force components to rerender when the motion
     * value is updated.
     */ const { isStatic } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionConfigContext"]);
    if (isStatic) {
        const [, setLatest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "useMotionValue.useEffect": ()=>value.on("change", setLatest)
        }["useMotionValue.useEffect"], []);
    }
    return value;
}
;
}),
"[project]/node_modules/framer-motion/dist/es/value/use-combine-values.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCombineMotionValues",
    ()=>useCombineMotionValues
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function useCombineMotionValues(values, combineValues) {
    /**
     * Initialise the returned motion value. This remains the same between renders.
     */ const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(combineValues());
    /**
     * Create a function that will update the template motion value with the latest values.
     * This is pre-bound so whenever a motion value updates it can schedule its
     * execution in Framesync. If it's already been scheduled it won't be fired twice
     * in a single frame.
     */ const updateValue = ()=>value.set(combineValues());
    /**
     * Synchronously update the motion value with the latest values during the render.
     * This ensures that within a React render, the styles applied to the DOM are up-to-date.
     */ updateValue();
    /**
     * Subscribe to all motion values found within the template. Whenever any of them change,
     * schedule an update.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "useCombineMotionValues.useIsomorphicLayoutEffect": ()=>{
            const scheduleUpdate = {
                "useCombineMotionValues.useIsomorphicLayoutEffect.scheduleUpdate": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].preRender(updateValue, false, true)
            }["useCombineMotionValues.useIsomorphicLayoutEffect.scheduleUpdate"];
            const subscriptions = values.map({
                "useCombineMotionValues.useIsomorphicLayoutEffect.subscriptions": (v)=>v.on("change", scheduleUpdate)
            }["useCombineMotionValues.useIsomorphicLayoutEffect.subscriptions"]);
            return ({
                "useCombineMotionValues.useIsomorphicLayoutEffect": ()=>{
                    subscriptions.forEach({
                        "useCombineMotionValues.useIsomorphicLayoutEffect": (unsubscribe)=>unsubscribe()
                    }["useCombineMotionValues.useIsomorphicLayoutEffect"]);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"])(updateValue);
                }
            })["useCombineMotionValues.useIsomorphicLayoutEffect"];
        }
    }["useCombineMotionValues.useIsomorphicLayoutEffect"]);
    return value;
}
;
}),
"[project]/node_modules/framer-motion/dist/es/value/use-computed.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useComputed",
    ()=>useComputed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/value/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$combine$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-combine-values.mjs [app-client] (ecmascript)");
"use client";
;
;
function useComputed(compute) {
    /**
     * Open session of collectMotionValues. Any MotionValue that calls get()
     * will be saved into this array.
     */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collectMotionValues"].current = [];
    compute();
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$combine$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCombineMotionValues"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collectMotionValues"].current, compute);
    /**
     * Synchronously close session of collectMotionValues.
     */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collectMotionValues"].current = undefined;
    return value;
}
;
}),
"[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTransform",
    ()=>useTransform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/utils/transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$combine$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-combine-values.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$computed$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-computed.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
function useTransform(input, inputRangeOrTransformer, outputRangeOrMap, options) {
    if (typeof input === "function") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$computed$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComputed"])(input);
    }
    /**
     * Detect if outputRangeOrMap is an output map (object with keys)
     * rather than an output range (array).
     */ const isOutputMap = outputRangeOrMap !== undefined && !Array.isArray(outputRangeOrMap) && typeof inputRangeOrTransformer !== "function";
    if (isOutputMap) {
        return useMapTransform(input, inputRangeOrTransformer, outputRangeOrMap, options);
    }
    const outputRange = outputRangeOrMap;
    const transformer = typeof inputRangeOrTransformer === "function" ? inputRangeOrTransformer : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transform"])(inputRangeOrTransformer, outputRange, options);
    const result = Array.isArray(input) ? useListTransform(input, transformer) : useListTransform([
        input
    ], {
        "useTransform.useListTransform": ([latest])=>transformer(latest)
    }["useTransform.useListTransform"]);
    const inputAccelerate = !Array.isArray(input) ? input.accelerate : undefined;
    if (inputAccelerate && !inputAccelerate.isTransformed && typeof inputRangeOrTransformer !== "function" && Array.isArray(outputRangeOrMap) && options?.clamp !== false) {
        result.accelerate = {
            ...inputAccelerate,
            times: inputRangeOrTransformer,
            keyframes: outputRangeOrMap,
            isTransformed: true,
            ...options?.ease ? {
                ease: options.ease
            } : {}
        };
    }
    return result;
}
function useListTransform(values, transformer) {
    const latest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])({
        "useListTransform.useConstant[latest]": ()=>[]
    }["useListTransform.useConstant[latest]"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$combine$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCombineMotionValues"])(values, {
        "useListTransform.useCombineMotionValues": ()=>{
            latest.length = 0;
            const numValues = values.length;
            for(let i = 0; i < numValues; i++){
                latest[i] = values[i].get();
            }
            return transformer(latest);
        }
    }["useListTransform.useCombineMotionValues"]);
}
function useMapTransform(inputValue, inputRange, outputMap, options) {
    /**
     * Capture keys once to ensure hooks are called in consistent order.
     */ const keys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])({
        "useMapTransform.useConstant[keys]": ()=>Object.keys(outputMap)
    }["useMapTransform.useConstant[keys]"]);
    const output = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])({
        "useMapTransform.useConstant[output]": ()=>({})
    }["useMapTransform.useConstant[output]"]);
    for (const key of keys){
        output[key] = useTransform(inputValue, inputRange, outputMap[key], options);
    }
    return output;
}
;
}),
"[project]/node_modules/motion-dom/dist/es/value/follow-value.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "attachFollow",
    ()=>attachFollow,
    "followValue",
    ()=>followValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/value/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$JSAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/animation/JSAnimation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
;
;
;
;
/**
 * Create a `MotionValue` that animates to its latest value using any transition type.
 * Can either be a value or track another `MotionValue`.
 *
 * ```jsx
 * const x = motionValue(0)
 * const y = followValue(x, { type: "spring", stiffness: 300 })
 * // or with tween
 * const z = followValue(x, { type: "tween", duration: 0.5, ease: "easeOut" })
 * ```
 *
 * @param source - Initial value or MotionValue to track
 * @param options - Animation transition options
 * @returns `MotionValue`
 *
 * @public
 */ function followValue(source, options) {
    const initialValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(source) ? source.get() : source;
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionValue"])(initialValue);
    attachFollow(value, source, options);
    return value;
}
/**
 * Attach an animation to a MotionValue that will animate whenever the value changes.
 * Similar to attachSpring but supports any transition type (spring, tween, inertia, etc.)
 *
 * @param value - The MotionValue to animate
 * @param source - Initial value or MotionValue to track
 * @param options - Animation transition options
 * @returns Cleanup function
 *
 * @public
 */ function attachFollow(value, source, options = {}) {
    const initialValue = value.get();
    let activeAnimation = null;
    let latestValue = initialValue;
    let latestSetter;
    const unit = typeof initialValue === "string" ? initialValue.replace(/[\d.-]/g, "") : undefined;
    const stopAnimation = ()=>{
        if (activeAnimation) {
            activeAnimation.stop();
            activeAnimation = null;
        }
        value.animation = undefined;
    };
    const startAnimation = ()=>{
        const currentValue = asNumber(value.get());
        const targetValue = asNumber(latestValue);
        // Don't animate if we're already at the target
        if (currentValue === targetValue) {
            stopAnimation();
            return;
        }
        // Use the running animation's analytical velocity for accuracy,
        // falling back to the MotionValue's velocity for the initial animation.
        // This prevents systematic velocity loss at high frame rates (240hz+).
        const velocity = activeAnimation ? activeAnimation.getGeneratorVelocity() : value.getVelocity();
        stopAnimation();
        activeAnimation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$JSAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JSAnimation"]({
            keyframes: [
                currentValue,
                targetValue
            ],
            velocity,
            // Default to spring if no type specified (matches useSpring behavior)
            type: "spring",
            restDelta: 0.001,
            restSpeed: 0.01,
            ...options,
            onUpdate: latestSetter
        });
    };
    // Use a stable function reference so the frame loop Set deduplicates
    // multiple calls within the same frame (e.g. rapid mouse events)
    const scheduleAnimation = ()=>{
        startAnimation();
        value.animation = activeAnimation ?? undefined;
        value["events"].animationStart?.notify();
        activeAnimation?.then(()=>{
            value.animation = undefined;
            value["events"].animationComplete?.notify();
        });
    };
    value.attach((v, set)=>{
        latestValue = v;
        latestSetter = (latest)=>set(parseValue(latest, unit));
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].postRender(scheduleAnimation);
    }, stopAnimation);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(source)) {
        let skipNextAnimation = options.skipInitialAnimation === true;
        const removeSourceOnChange = source.on("change", (v)=>{
            if (skipNextAnimation) {
                skipNextAnimation = false;
                value.jump(parseValue(v, unit), false);
            } else {
                value.set(parseValue(v, unit));
            }
        });
        const removeValueOnDestroy = value.on("destroy", removeSourceOnChange);
        return ()=>{
            removeSourceOnChange();
            removeValueOnDestroy();
        };
    }
    return stopAnimation;
}
function parseValue(v, unit) {
    return unit ? v + unit : v;
}
function asNumber(v) {
    return typeof v === "number" ? v : parseFloat(v);
}
;
}),
"[project]/node_modules/framer-motion/dist/es/value/use-follow-value.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFollowValue",
    ()=>useFollowValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$follow$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/value/follow-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function useFollowValue(source, options = {}) {
    const { isStatic } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionConfigContext"]);
    const getFromSource = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(source) ? source.get() : source;
    // isStatic will never change, allowing early hooks return
    if (isStatic) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(getFromSource);
    }
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(getFromSource());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInsertionEffect"])({
        "useFollowValue.useInsertionEffect": ()=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$follow$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attachFollow"])(value, source, options);
        }
    }["useFollowValue.useInsertionEffect"], [
        value,
        JSON.stringify(options)
    ]);
    return value;
}
;
}),
"[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSpring",
    ()=>useSpring
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$follow$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-follow-value.mjs [app-client] (ecmascript)");
"use client";
;
function useSpring(source, options = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$follow$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFollowValue"])(source, {
        type: "spring",
        ...options
    });
}
;
}),
]);

//# sourceMappingURL=_107q778._.js.map