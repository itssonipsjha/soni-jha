import base64

with open('/Users/sonijha/Documents/soni-resume/public/avatar.png', 'rb') as f:
    b64 = base64.b64encode(f.read()).decode('utf-8')

svg = f"""<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="circle">
      <circle cx="200" cy="200" r="200" />
    </clipPath>
  </defs>
  <image width="400" height="400" clip-path="url(#circle)" href="data:image/png;base64,{b64}"/>
</svg>"""

with open('/Users/sonijha/Documents/soni-resume/public/favicon.svg', 'w') as f:
    f.write(svg)
