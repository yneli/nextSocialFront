export const ReactSvg = ({ width, height, viewBox, SvgFill, d, pathFill }: any) => {
    return <>
      <svg width={width} height={height} viewBox={viewBox} fill={SvgFill} xmlns="http://www.w3.org/2000/svg">
      <path d={d}
      fill={pathFill}
      />
      </svg>
      </>;
};