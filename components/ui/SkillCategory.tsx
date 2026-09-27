interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon?: React.ReactNode;
}

export function SkillCategory({ title, skills, icon }: SkillCategoryProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        {icon && <span className="text-amber-500">{icon}</span>}
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm font-medium rounded hover:bg-amber-50 hover:text-amber-700 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
