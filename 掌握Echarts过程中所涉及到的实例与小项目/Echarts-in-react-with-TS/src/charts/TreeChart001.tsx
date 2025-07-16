import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import flareData from "./Flare.json"; // 直接导入

const TreeChart001: React.FC = () => {
  const [option, setOption] = useState<any>(null);

  useEffect(() => {
    const data = { ...flareData }; // 复制数据，避免修改导入内容
    data.children.forEach((d: any, idx: number) => {
      if (idx % 2 === 0) d.collapsed = true;
    });

    const treeOption = {
      tooltip: {
        trigger: "item",
        triggerOn: "mousemove",
      },
      series: [
        {
          type: "tree",
          data: [data],
          top: "1%",
          left: "7%",
          bottom: "1%",
          right: "20%",
          symbolSize: 7,
          label: {
            position: "left",
            verticalAlign: "middle",
            align: "right",
            fontSize: 9,
          },
          leaves: {
            label: {
              position: "right",
              verticalAlign: "middle",
              align: "left",
            },
          },
          emphasis: {
            focus: "descendant",
          },
          expandAndCollapse: true,
          animationDuration: 550,
          animationDurationUpdate: 750,
        },
      ],
    };

    setOption(treeOption);
  }, []);

  return (
    <div style={{ height: 400, width: 350 }}>
      {option ? (
        <ReactECharts
          option={option}
          style={{ height: "100%", width: "100%" }}
        />
      ) : (
        <div className="text-center pt-24 text-gray-500">
          正在加载树图数据...
        </div>
      )}
    </div>
  );
};

export default TreeChart001;
