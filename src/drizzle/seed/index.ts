import db from "../db";
import { departmentsTable } from "../schema/schema";

async function seedDepartments() {
  await db.insert(departmentsTable).values([
    {
      name: "Choir",
      description:
        "Handles music and worship experiences during services.",
    },
    {
      name: "Hospitality & Welfare",
      description:
        "Welcomes and assists guests and members during church events.",
    },
    {
      name: "Tech & Media",
      description: "Manages audio-visual equipment and online presence.",
    },
    {
      name: "Children's Ministry",
      description: "Oversees programs and activities for children.",
    },
    {
      name: "Youth Ministry",
      description: "Focuses on the spiritual growth of teenagers.",
    },
    {
      name: "Outreach & Missions",
      description: "Coordinates community service and mission trips.",
    },
    {
      name: "Prayer Ministry",
      description: "Leads prayer meetings and intercessory prayer efforts.",
    },
    {
      name: "Ushering",
      description:
        "Facilitates the smooth flow of services and events, ensuring that attendees are welcomed and seated appropriately.",
    },
    {
      name: "Administration",
      description: "Handles church operations and administrative tasks.",
    },
  ]);
}
seedDepartments()
  .then(() => {
    console.log("✅ Departments seeded successfully");
  })
  .catch((error) => {
    console.error("❌ Error seeding departments:", error);
  });
