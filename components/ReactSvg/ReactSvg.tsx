import style from "./ReactSvg.module.scss";
export const ReactSvg = ({ width, height, viewBox, SvgFill, d, pathFill }: any) => {
    return <>
      <svg className={style.svgitem} width={width} height={height} viewBox={viewBox} fill={SvgFill} xmlns="http://www.w3.org/2000/svg">
      <path d={d}
      fill={pathFill}
      />
      </svg>
      </>;
};