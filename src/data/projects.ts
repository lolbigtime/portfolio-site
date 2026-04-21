import { Project } from "@/types";
import meshnl from "@/content/projects/meshnl.json";
import pyentrez from "@/content/projects/pyentrez.json";
import skyhub from "@/content/projects/skyhub.json";
import illinoisbuddy from "@/content/projects/illinoisbuddy.json";
import skystats from "@/content/projects/skystats.json";

// To add a project: drop a JSON file into src/content/projects/ and add
// one import line below. Order in this array is the order on the page.
export const projects: Project[] = [
  meshnl,
  pyentrez,
  skyhub,
  illinoisbuddy,
  skystats,
] as Project[];
