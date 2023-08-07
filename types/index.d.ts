interface Project {
  project_id: number;
  project_name: string;
  project_description: string;
}

interface Edition {
  edition_id: number;
  project_id: number;
  edition_name: string;
  pledge_price: number;
  unit_left: number;
  edition_description: string;
}
interface ProjectWithEditions extends Project {
  editions: Edition[];
}

interface ProjectsResponse {
  projects: ProjectWithEditions[];
}
