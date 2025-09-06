import sequelize from "@plugins/sequelize";
import { seedStaff } from "./create-admin"; 

const runSeed = async () => {
  try {
    await sequelize.authenticate();
    await seedStaff();
    await sequelize.close();
  } catch (error) {
    console.error("❌ Error running seed:", error);
    await sequelize.close();
  }
};

runSeed();
