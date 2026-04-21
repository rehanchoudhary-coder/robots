// ─── Robotics Component Data Layer ───────────────────────────────────────────

export interface RobotComponent {
  id: string;
  name: string;
  category: 'brain' | 'motor' | 'sensor' | 'controller' | 'power' | 'chassis';
  price: number;
  performanceImpact: string;
  specs: Record<string, string>;
  rating: number; // 1-5
  description: string;
  valueScore: number; // computed: rating / (price / 100)
}

export const robotComponents: RobotComponent[] = [
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
      'GPIO Pins': '45',
    },
    rating: 4,
    description: 'Dual-core Xtensa processor with native WiFi and Bluetooth. Perfect for IoT robots.',
    valueScore: 26.7,
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
      'PWM': '15 channels',
    },
    rating: 3.5,
    description: 'The workhorse of robotics prototyping. Unmatched pin count for complex builds.',
    valueScore: 14,
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
      'GPIO': '40 pins',
    },
    rating: 5,
    description: 'A full computer for autonomous AI. Runs ROS, TensorFlow, and computer vision pipelines.',
    valueScore: 9.1,
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
      'ADC': '18 channels',
    },
    rating: 4.5,
    description: 'Fastest ARM-based microcontroller. Ideal for real-time sensor fusion.',
    valueScore: 14.1,
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
      'Weight': '120g',
    },
    rating: 4.5,
    description: 'Efficient, durable, and powerful. The standard for professional-grade robots.',
    valueScore: 10,
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
      'Weight': '280g',
    },
    rating: 4,
    description: 'Precise angular control for CNC, 3D printers and robotic arms.',
    valueScore: 22.2,
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
      'Weight': '55g',
    },
    rating: 3.5,
    description: 'Metal-gear servo with high torque. Great for grippers and pan-tilt mechanisms.',
    valueScore: 43.75,
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
      'Weight': '100g',
    },
    rating: 3,
    description: 'Affordable and reliable. Perfect for wheeled robot platforms.',
    valueScore: 25,
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
      'Accuracy': '±2cm',
    },
    rating: 5,
    description: 'Full 360° laser scanning for SLAM navigation and obstacle mapping.',
    valueScore: 4.2,
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
      'DMP': 'Built-in',
    },
    rating: 4,
    description: '6-axis motion tracking. Essential for balancing robots and drone stabilization.',
    valueScore: 80,
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
      'Trigger': '10μs pulse',
    },
    rating: 3,
    description: 'Simple, cheap, effective distance measurement for obstacle avoidance.',
    valueScore: 100,
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
      'Lens': 'Fixed focus',
    },
    rating: 3.5,
    description: 'Low-cost VGA camera module for basic computer vision applications.',
    valueScore: 35,
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
      'Interface': 'USB 3.0',
    },
    rating: 5,
    description: 'Professional stereo depth camera for 3D environment mapping and navigation.',
    valueScore: 1.8,
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
      'Built-in 5V': 'Regulator',
    },
    rating: 3.5,
    description: 'Classic dual H-bridge driver for DC motors and stepper motors.',
    valueScore: 50,
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
      'Chainable': 'Up to 62',
    },
    rating: 4.5,
    description: '16-channel PWM driver. Control up to 992 servos with daisy-chaining.',
    valueScore: 45,
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
      'Connector': 'XT60',
    },
    rating: 4,
    description: 'Lightweight, high-discharge battery for mobile robots and drones.',
    valueScore: 18.2,
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
      'Type': 'Step-down',
    },
    rating: 4,
    description: 'High-efficiency switchable voltage regulator for mixed-voltage systems.',
    valueScore: 66.7,
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
      'Terrain': 'All surfaces',
    },
    rating: 4,
    description: 'Aluminum tracked platform with motors. Ideal for Mars and rough terrain simulation.',
    valueScore: 11.4,
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
      'Movement': '360° omni',
    },
    rating: 5,
    description: 'Premium omnidirectional platform. Move in any direction without turning.',
    valueScore: 5.9,
  },
];

// ── Environment Data ─────────────────────────────────────────────────────────

export interface EnvironmentData {
  id: string;
  name: string;
  icon: string;
  color: string;
  frameRange: [number, number];
  metrics: {
    battery: number;
    speed: number;
    durability: number;
    temperature: number;
    signal: number;
  };
  description: string;
  challenges: string[];
}

export const environments: EnvironmentData[] = [
  {
    id: 'standby',
    name: 'Standby Mode',
    icon: '⏸',
    color: '#4F9C8F',
    frameRange: [1, 40],
    metrics: {
      battery: 100,
      speed: 0,
      durability: 100,
      temperature: 22,
      signal: 100,
    },
    description: 'Robot is in standby mode. All systems nominal.',
    challenges: ['System Diagnostics', 'Calibration Check'],
  },
  {
    id: 'mars',
    name: 'Mars Surface',
    icon: '🔴',
    color: '#E85D3A',
    frameRange: [41, 96],
    metrics: {
      battery: 72,
      speed: 45,
      durability: 85,
      temperature: -63,
      signal: 34,
    },
    description: 'Extreme cold, low gravity, iron oxide terrain. Solar interference affects comms.',
    challenges: ['Dust Storms', 'Low Gravity', 'Radiation Exposure'],
  },
  {
    id: 'deepsea',
    name: 'Deep Sea',
    icon: '🌊',
    color: '#1E6F9F',
    frameRange: [97, 144],
    metrics: {
      battery: 58,
      speed: 30,
      durability: 65,
      temperature: 2,
      signal: 12,
    },
    description: 'Crushing pressure, zero visibility, corrosive saltwater environment.',
    challenges: ['Pressure (1000 ATM)', 'Corrosion', 'No GPS Signal'],
  },
  {
    id: 'factory',
    name: 'Smart Factory',
    icon: '🏭',
    color: '#D4A574',
    frameRange: [145, 192],
    metrics: {
      battery: 95,
      speed: 88,
      durability: 92,
      temperature: 35,
      signal: 98,
    },
    description: 'High-speed assembly line. Precision and repeatability are critical.',
    challenges: ['Collision Avoidance', 'Sync Timing', 'Heat Dissipation'],
  },
];

// ── Helper: Get Best Value Components for Budget ────────────────────────────

export function getBestValueComponents(budget: number): {
  components: RobotComponent[];
  totalCost: number;
  remaining: number;
} {
  const categories: RobotComponent['category'][] = ['brain', 'motor', 'sensor', 'controller', 'power', 'chassis'];
  const selected: RobotComponent[] = [];
  let totalCost = 0;

  for (const category of categories) {
    const available = robotComponents
      .filter((c) => c.category === category && c.price <= budget - totalCost)
      .sort((a, b) => b.valueScore - a.valueScore);

    if (available.length > 0) {
      selected.push(available[0]);
      totalCost += available[0].price;
    }
  }

  return {
    components: selected,
    totalCost,
    remaining: budget - totalCost,
  };
}

// ── Category metadata ────────────────────────────────────────────────────────

export const categoryMeta: Record<RobotComponent['category'], { label: string; icon: string; color: string }> = {
  brain: { label: 'Brain (MCU)', icon: '🧠', color: '#A78BFA' },
  motor: { label: 'Motors', icon: '⚡', color: '#F59E0B' },
  sensor: { label: 'Sensors', icon: '📡', color: '#3B82F6' },
  controller: { label: 'Controllers', icon: '🎛️', color: '#10B981' },
  power: { label: 'Power', icon: '🔋', color: '#EF4444' },
  chassis: { label: 'Chassis', icon: '🤖', color: '#8B5CF6' },
};
