import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";
import axios from "axios";

const TreeChart001: React.FC = () => {
  const [option, setOption] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTreeData = async () => {
      try {
        setLoading(true);

        // 修改此路径为你自己的数据路径或改为本地 JSON 文件
        const res = await axios.get("/data/asset/data/flare.json");

        const data = res.data;
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
      } catch (error) {
        console.error("加载树图数据失败:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTreeData();
  }, []);

  return (
    <div style={{ height: 500 }}>
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
