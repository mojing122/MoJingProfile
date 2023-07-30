import { HeartIcon, BookOpenIcon } from "@heroicons/vue/24/outline";
import axios from "axios";

const awards = [
  {
    id: 1,
    detial: "《基于提示学习的个性化推荐算法》\n核心期刊\n第一作者",
    date: "2023.5",
  },
  {
    id: 2,
    detial: "第十三届“挑战杯”\n中国大学生创业计划竞赛\n金奖",
    date: "2023.3",
  },
  {
    id: 3,
    detial:
      "《Personalized Recommendation Based On Entity Attributes and Graph Features》\n第三作者",
    date: "2021.7",
  },
];

const timeline = [
  {
    content: "发表IEEE会议（ICBK）论文",
    detail:
      "Zhu Y, Dong B, Sha Z. Personalized Recommendation Based On Entity Attributes and Graph Features[C]//2021 IEEE International Conference on Big Knowledge (ICBK). IEEE, 2021: 7-14.",
    datetime: "2021年7月",
  },
  {
    content: "第八届江苏省“互联网+”大学生创新创业大赛：省赛二等奖",
    detail:
      "《整“妆”出发——中华国妆文化服务践行者》\n核心成员，通过信息技术赋能传统老字号企业，设计国妆文化元宇宙博物馆，并策划开展国妆文化元宇宙博物馆建设方案评审会。",
    datetime: "2022年6月",
  },
  {
    content: "第十三届“挑战杯”中国大学生创业计划竞赛：国家金奖",
    detail:
      "《妆灵毓秀——国妆老字号文化传承与振兴的领航者》核心成员，前期负责文化推广平台的线上搭建和维护，包括资讯网站、微信小程序、社区app等；后负责公司的整体技术运营，以及路演PPT的设计制作。",
    datetime: "2023年3月",
  },
  {
    content: "在《扬州大学学报（自然科学版）》发表论文（第一作者）",
    detail: "《基于提示学习的个性化推荐算法》，负责实验操作以及论文的撰写。",
    datetime: "2023年5月",
  },
  {
    content: "第十四届全国大学生蓝桥杯大赛软件类：国赛二等奖",
    detail: "Python程序设计组",
    datetime: "2023年6月",
  },
  {
    content: "第十六届中国大学生计算机设计大赛：国赛三等奖",
    detail: "大数据应用组",
    datetime: "2023年7月",
  },
];

const elseProjects = [
  {
    title: "智慧医疗",
    href: "",
    icon: HeartIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
    detials: "智慧医疗数据分析平台，基于ThinkPHP框架",
  },
  {
    title: "教务管理平台",
    href: "",
    icon: BookOpenIcon,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
    detials: "基于Vue前端+Node后端的简单的教务管理系统",
  },
];

const blogSites = {
  csdn: { title: "CSDN", href: "https://blog.csdn.net/" },
};

const postLength = 3;

axios.defaults.baseURL = "/csdn_api";

function getXMLNode(parm) {
  let str = parm.xmlStr;
  //创建文档对象
  let postjson = [];
  let xmlDoc = new DOMParser().parseFromString(str, "text/xml");
  let root = xmlDoc.getElementsByTagName("channel")[0];
  let items = root.getElementsByTagName("item");

  var myRegexp = /<!\[CDATA\[(.*)]]>/;
  for (var i = 0; i < items.length; i++) {
    let jsonItem = {};
    let itemTitle = myRegexp.exec(
      items[i].getElementsByTagName("title")[0].innerHTML
    )[1];
    let itemHref = items[i].getElementsByTagName("link")[0].innerHTML;
    let itemDescription = myRegexp.exec(
      items[i].getElementsByTagName("description")[0].innerHTML
    )[1];
    let itemDate = items[i].getElementsByTagName("pubDate")[0].innerHTML;
    let newDate = new Date(itemDate);
    let year = newDate.getFullYear();
    let month = (newDate.getMonth() + 1).toString().padStart(2, "0"); // 补零操作
    let day = newDate.getDate().toString().padStart(2, "0"); // 补零操作
    // 将年、月和日组合成所需的格式
    let formattedDate = `${year}-${month}-${day}`;

    jsonItem["title"] = itemTitle;
    jsonItem["href"] = itemHref;
    jsonItem["description"] = itemDescription;
    jsonItem["datetime"] = formattedDate;
    jsonItem["category"] = blogSites.csdn;
    postjson.push(jsonItem);
    if (i >= postLength - 1) {
      break;
    }
  }
  return postjson;
}

// 获取rss列表
async function getXML() {
  try {
    const response = await axios.get("/rss/list?spm=1001.2014.3001.5494");
    const xmlData = response.data;

    // 调用从XML中提取节点数据方法 返回的数据
    // getXMLNode()是提取节点数据方法
    const resData = getXMLNode({ xmlStr: xmlData });
    return resData;
  } catch (error) {
    console.log("ERROR", error);
    return {};
  }
}

var posts = await getXML(); // 将getXML函数返回的结果赋值给外部变量post

export { awards, timeline, elseProjects, posts };
