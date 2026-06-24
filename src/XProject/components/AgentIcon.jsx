const AgentIcon = ({ color = "#10b981", className = "" }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className}
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* 外圈準星 */}
    <circle cx="50" cy="50" r="45" stroke={color} strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
    <path d="M50 5V15M50 85V95M5 50H15M85 50H95" stroke={color} strokeWidth="2" />
    
    {/* 核心爪印標誌 */}
    <g fill={color}>
      {/* 腳趾 */}
      <circle cx="30" cy="35" r="8" />
      <circle cx="43" cy="25" r="8" />
      <circle cx="57" cy="25" r="8" />
      <circle cx="70" cy="35" r="8" />
      {/* 腳掌墊 */}
      <path d="M50 45C35 45 25 55 25 70C25 80 35 85 50 85C65 85 75 80 75 70C75 55 65 45 50 45Z" />
    </g>

    {/* 裝飾性數位線條 */}
    <rect x="20" y="20" width="60" height="60" stroke={color} strokeWidth="0.5" opacity="0.2" />
    <path d="M10 10L25 10M10 10L10 25" stroke={color} strokeWidth="2" />
    <path d="M90 90L75 90M90 90L90 75" stroke={color} strokeWidth="2" />
  </svg>
);

export default AgentIcon;