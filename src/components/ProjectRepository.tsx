
import { useState } from 'react';
import { ChevronRight, ChevronDown, File, Folder, X } from 'lucide-react';

interface FileNode {
  name: string;
  type: 'file' | 'folder';
  children?: FileNode[];
  content?: string;
}

interface ProjectRepositoryProps {
  project: {
    title: string;
    description: string;
    tech: string[];
  };
  onClose: () => void;
}

const ProjectRepository = ({ project, onClose }: ProjectRepositoryProps) => {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['src']));
  const [selectedFile, setSelectedFile] = useState<string | null>('src/main.py');

  // Sample file structure
  const fileStructure: FileNode[] = [
    {
      name: 'src',
      type: 'folder',
      children: [
        { name: 'main.py', type: 'file', content: '# Main application entry point\nimport os\nfrom flask import Flask\n\napp = Flask(__name__)\n\n@app.route("/")\ndef hello():\n    return "Hello, World!"\n\nif __name__ == "__main__":\n    app.run(debug=True)' },
        { name: 'config.py', type: 'file', content: '# Configuration settings\nclass Config:\n    SECRET_KEY = os.environ.get("SECRET_KEY")\n    DATABASE_URL = os.environ.get("DATABASE_URL")' },
        {
          name: 'utils',
          type: 'folder',
          children: [
            { name: 'helpers.py', type: 'file', content: '# Utility functions\ndef format_date(date):\n    return date.strftime("%Y-%m-%d")\n\ndef validate_email(email):\n    import re\n    pattern = r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"\n    return re.match(pattern, email) is not None' },
            { name: 'database.py', type: 'file', content: '# Database utilities\nimport sqlite3\n\ndef get_connection():\n    conn = sqlite3.connect("database.db")\n    return conn' }
          ]
        }
      ]
    },
    { name: 'README.md', type: 'file', content: `# ${project.title}\n\n${project.description}\n\n## Technologies Used\n${project.tech.map(tech => `- ${tech}`).join('\n')}\n\n## Installation\n\n1. Clone the repository\n2. Install dependencies\n3. Run the application` },
    { name: 'requirements.txt', type: 'file', content: 'flask==2.3.3\nsqlite3\nrequests==2.31.0' },
    { name: '.gitignore', type: 'file', content: '__pycache__/\n*.pyc\n.env\nnode_modules/\n.DS_Store' }
  ];

  const toggleFolder = (path: string) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(path)) {
      newExpanded.delete(path);
    } else {
      newExpanded.add(path);
    }
    setExpandedFolders(newExpanded);
  };

  const getFileContent = (fileName: string, nodes: FileNode[] = fileStructure, currentPath = ''): string => {
    for (const node of nodes) {
      const nodePath = currentPath ? `${currentPath}/${node.name}` : node.name;
      if (nodePath === fileName && node.type === 'file' && node.content) {
        return node.content;
      }
      if (node.children) {
        const result = getFileContent(fileName, node.children, nodePath);
        if (result) return result;
      }
    }
    return '';
  };

  const renderFileTree = (nodes: FileNode[], currentPath = '', level = 0) => {
    return nodes.map((node) => {
      const nodePath = currentPath ? `${currentPath}/${node.name}` : node.name;
      const isExpanded = expandedFolders.has(nodePath);
      
      return (
        <div key={nodePath}>
          <div
            className={`flex items-center py-1 px-2 hover:bg-slate-700/50 cursor-pointer rounded text-sm ${
              selectedFile === nodePath ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-300'
            }`}
            style={{ paddingLeft: `${level * 16 + 8}px` }}
            onClick={() => {
              if (node.type === 'folder') {
                toggleFolder(nodePath);
              } else {
                setSelectedFile(nodePath);
              }
            }}
          >
            {node.type === 'folder' ? (
              <>
                {isExpanded ? (
                  <ChevronDown className="w-4 h-4 mr-1" />
                ) : (
                  <ChevronRight className="w-4 h-4 mr-1" />
                )}
                <Folder className="w-4 h-4 mr-2 text-cyan-400" />
              </>
            ) : (
              <>
                <div className="w-5 mr-1"></div>
                <File className="w-4 h-4 mr-2 text-slate-400" />
              </>
            )}
            <span>{node.name}</span>
          </div>
          {node.type === 'folder' && isExpanded && node.children && (
            <div>
              {renderFileTree(node.children, nodePath, level + 1)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800/95 backdrop-blur-sm rounded-xl border border-slate-700 w-full max-w-6xl h-5/6 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <div>
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="text-slate-400 text-sm">{project.description}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* File Explorer */}
          <div className="w-1/3 border-r border-slate-700 overflow-y-auto">
            <div className="p-3 border-b border-slate-700">
              <h4 className="text-sm font-medium text-slate-300">Project Files</h4>
            </div>
            <div className="p-2">
              {renderFileTree(fileStructure)}
            </div>
          </div>

          {/* File Content */}
          <div className="flex-1 flex flex-col">
            {selectedFile ? (
              <>
                <div className="p-3 border-b border-slate-700 bg-slate-900/50">
                  <span className="text-sm text-slate-400">{selectedFile}</span>
                </div>
                <div className="flex-1 overflow-auto">
                  <pre className="p-4 text-sm text-slate-300 font-mono bg-slate-900/30">
                    <code>{getFileContent(selectedFile)}</code>
                  </pre>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <p className="text-slate-400">Select a file to view its content</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectRepository;
