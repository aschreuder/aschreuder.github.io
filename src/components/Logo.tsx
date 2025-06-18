
const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="relative">
        {/* Main crystal shape */}
        <div className="w-12 h-12 relative transform rotate-12 hover:rotate-45 transition-transform duration-500">
          {/* Diamond facets */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 transform rotate-45 rounded-lg shadow-lg shadow-cyan-400/30">
            {/* Inner facet */}
            <div className="absolute inset-1 bg-gradient-to-tl from-blue-600 via-cyan-500 to-purple-500 rounded-md">
              {/* Core shine */}
              <div className="absolute inset-2 bg-gradient-to-br from-white/30 to-transparent rounded-sm"></div>
            </div>
          </div>
          
          {/* Side facets */}
          <div className="absolute -top-1 left-1/2 w-6 h-6 bg-gradient-to-b from-cyan-300 to-cyan-500 transform -translate-x-1/2 rotate-45 rounded-sm opacity-80"></div>
          <div className="absolute -bottom-1 left-1/2 w-6 h-6 bg-gradient-to-t from-purple-600 to-blue-500 transform -translate-x-1/2 rotate-45 rounded-sm opacity-80"></div>
          
          {/* Sparkle effects */}
          <div className="absolute -top-2 -right-2 w-1 h-1 bg-white rounded-full animate-pulse"></div>
          <div className="absolute -bottom-2 -left-2 w-0.5 h-0.5 bg-cyan-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 -right-3 w-0.5 h-0.5 bg-purple-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 blur-xl rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default Logo;
