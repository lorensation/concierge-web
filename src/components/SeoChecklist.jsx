export default function SeoChecklist() {
    const checklist = [
      { task: "Implement metadata for all pages", completed: true },
      { task: "Create XML sitemap", completed: true },
      { task: "Configure robots.txt", completed: true },
      { task: "Add structured data markup", completed: true },
      { task: "Optimize images with alt text", completed: true },
      { task: "Implement canonical URLs", completed: true },
      { task: "Set up Google Analytics", completed: true },
      { task: "Improve page load speed", completed: true },
      { task: "Optimize for mobile devices", completed: true },
      { task: "Create content strategy", completed: true },
      { task: "Implement internal linking", completed: true },
      { task: "Set up Google Search Console", completed: false },
      { task: "Create backlink strategy", completed: false },
      { task: "Implement social sharing", completed: true },
      { task: "Set up local SEO", completed: true },
    ]
  
    const completedTasks = checklist.filter((item) => item.completed).length
    const completionPercentage = Math.round((completedTasks / checklist.length) * 100)
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">SEO Implementation Checklist</h2>
          <span className="text-sm font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">
            {completionPercentage}% Complete
          </span>
        </div>
  
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${completionPercentage}%` }}></div>
        </div>
  
        <ul className="space-y-3">
          {checklist.map((item, index) => (
            <li key={index} className="flex items-center">
              <span
                className={`inline-flex items-center justify-center w-5 h-5 mr-2 rounded-full ${
                  item.completed ? "bg-green-500" : "bg-gray-300"
                }`}
              >
                {item.completed && (
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                )}
              </span>
              <span className={item.completed ? "text-gray-700" : "text-gray-500"}>{item.task}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  
  