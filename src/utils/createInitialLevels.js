const Level = require('../models/Level');

const createInitialLevels = async () => {
    const levels = [
        { level: 1, requiredExperience: 200 },
        { level: 2, requiredExperience: 400 },
        { level: 3, requiredExperience: 600 },
        { level: 4, requiredExperience: 800 },
        { level: 5, requiredExperience: 1000 },
        { level: 6, requiredExperience: 1200 },
        { level: 7, requiredExperience: 1400 },
        { level: 8, requiredExperience: 1600 },
        { level: 9, requiredExperience: 1800 },
        { level: 10, requiredExperience: 2000 },
    ];

    for (const levelData of levels) {
        const existingLevel = await Level.findOne({ level: levelData.level });
        if (!existingLevel) {
            const newLevel = new Level(levelData);
            await newLevel.save();
            console.log(`레벨 ${levelData.level} 저장 완료`);
        }
    }
};

module.exports = createInitialLevels;
