<template>
<div>
  <div class="header">
    <a id="logo">
      <img src="../assets/logo.png" />
    </a>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-button type='primary'>搜索</el-button>
  </div>
  <el-row class="container">
    <el-col :sm="16" :xs="24">
      <section class="content">
        <p>为您找到实体：</p>
        <el-card :body-style="{ padding: '8px 10px' }">
          <h1 class="title">{{name}}</h1>
          <img src="http://xs3.op.xywy.com/api.iu1.xywy.com/jib/20160509/deccbe5bc32f5902fd872ff171d29a0231073.jpg" class="diseaseImage" width="158" height="118">
          <p class="abstract">{{abstractContent}}</p>
          <div class="sub-title">
            <h2 class="title-text">疾病常识</h2>
          </div>
          <div class="basic-info cmn-clearfix">
            <dl class="basicInfo-block basicInfo-left">
              <dt class="basicInfo-item name">易感人群</dt>
              <dd class="basicInfo-item value">
                {{susceptiblePopulation}}
              </dd>
              <dt class="basicInfo-item name">患病比例</dt>
              <dd class="basicInfo-item value">
                {{sicknessRate}}
              </dd>
              <dt class="basicInfo-item name">传染方式</dt>
              <dd class="basicInfo-item value">
                {{infectionMode}}
              </dd>
              <dt class="basicInfo-item name">医保疾病</dt>
              <dd class="basicInfo-item value">
                {{isInsurance}}
              </dd>
            </dl>
            <dl class="basicInfo-block basicInfo-right">
              <dt class="basicInfo-item name">就诊科室</dt>
              <dd class="basicInfo-item value">
                {{departments}}
              </dd>
              <dt class="basicInfo-item name">治疗周期</dt>
              <dd class="basicInfo-item value">
                {{treatmentCycle}}
              </dd>
              <dt class="basicInfo-item name">治疗费用</dt>
              <dd class="basicInfo-item value">
                {{treatmentCost}}
              </dd>
              <dt class="basicInfo-item name">治愈率</dt>
              <dd class="basicInfo-item value">
                {{recoveryRate}}
              </dd>
            </dl>
          </div>
          <div class="sub-title">
            <h2 class="title-text">相关内容</h2>
          </div>
          <el-collapse accordion>
            <el-collapse-item>
              <template slot="title">
                治疗方案
              </template>
              <div class="jib-lh-articl">
                 <p> <strong>胎盘早剥西医治疗</strong></p>
                 <p> <strong>1、纠正休克</strong></p>
                 <p> 患者入院时，情况危重、处于休克状态者，应积极补充血容量，纠正休克，尽快改善患者状况。输血必须及时，尽量输新鲜血，既能补充血容量，又可补充凝血因子。</p>
                 <p> <strong>2、及时终止妊娠</strong></p>
                 <p> 胎盘早剥危及母儿的生命安全。母儿的预后与处理是否及时有密切关系。胎儿未娩出前，胎盘可能继续剥离，难以控制出血，持续时间越长，病情越严重，并发凝血功能障碍等合并症的可能性也越大。因此，一旦确诊，必须及时终止妊娠。终止妊娠的方法根据胎次、早剥的严重程度，胎儿宫内状况及宫口开大等情况而定。</p>
                 <p> （1）经阴道分娩：经产妇一般情况较好，出血以显性为主，宫口已开大，估计短时间内能迅速分娩者，可经阴道分娩，先行破膜，使羊水缓慢流出，缩减子宫容积。破膜后用腹带包裹腹部，压迫胎盘使之不再继续剥离，并可促进子宫收缩，必要时配合静脉滴注催产素缩短产程。分娩过程中，密切观察患者的血压、脉搏、宫底高度、宫缩情况及胎心等的变化。有条件者可用胎儿电子监测仪进行监护，更能早期发现宫缩及胎心的异常情况。</p>
                 <p> （2）剖宫产：重型胎盘早剥，特别是初产妇不能在短时间内结束分娩者;胎盘早剥虽属轻型，但有胎儿窘迫征象，需抢救胎儿者;重型胎盘早剥，胎儿已死，产妇病情恶化，处于危险之中又不能立即分娩者；破膜引产后，产程无进展者，均应及时行剖宫产术。术中取出胎儿、胎盘后，应及时行宫体肌注宫缩剂、按摩子宫，一般均可使子宫收缩良好，控制出血。若发现为子宫胎盘卒中，同样经注射宫缩剂及按摩等积极处理后，宫缩多可好转，出血亦可得到控制。若子宫仍不收缩，出血多且血液不凝，出血不能控制时，则应在输入新鲜血的同时行子宫切除术。</p>
                 <p> <strong>3、防止产后出血</strong></p>
                 <p> 胎盘早剥患者容易发生产后出血，故在分娩后应及时应用子宫收缩剂如催产素、麦角新碱等，并按摩子宫。若经各种措施仍不能控制出血，子宫收缩不佳时，须及时作子宫切除术。若大量出血且无凝血块，应考虑为凝血功能障碍，并按凝血功能障碍处理。</p>
                 <p> <strong>4、凝血功能障碍的处理</strong></p>
                 <p> （1）输新鲜血：及时、足量输入新鲜血液是补充血容量及凝血因子的有效措施。库存血若超过4小时，血小板功能即受破坏，效果差。为纠正血小板减少，有条件可输血小板浓缩液。</p>
                 <p> （2）输纤维蛋白原：若血纤维蛋白原低，同时伴有活动出血，且血不凝，经输入新鲜血等效果不佳时，可输纤维蛋白原3g，将纤维蛋白原溶于注射用水100ml中静脉滴注。通常给予3～6g纤维蛋白原即可收到较好效果。每4g纤维蛋白原可提高血纤维蛋白原1g/L。</p>
                 <p> （3）输新鲜血浆：新鲜冰冻血浆疗效仅次于新鲜血，尽管缺少红细胞，但含有凝血因子，一般1L新鲜冰冻血浆中含纤维蛋白原3g，且可将Ⅴ、Ⅷ因子提高到最低有效水平。因此，在无法及时得到新鲜血时，可选用新鲜冰冻血浆作应急措施。</p>
                 <p> （4）肝素：肝素有较强的抗凝作用，适用于DIC高凝阶段及不能直接去除病因者。胎盘早剥患者DIC的处理主要是终止妊娠以中断凝血活酶继续进入血内。对于处于凝血障碍的活动性出血阶段，应用肝素可加重出血，故一般不主张应用肝素治疗。</p>
                 <p> （5）抗纤溶剂：6-氨基已酸等能抑制纤溶系统的活动，若仍有进行性血管内凝血时，用此类药物可加重血管内凝血，故不宜使用。若病因已去除，DIC处于纤溶亢进阶段，出血不止时则可应用，如6-氨基已酸4～6g、止血环酸0.25～0.5g或对羧基苄胺0.1～0.2g溶于5%葡萄糖液100ml内静脉滴注。</p>
                 <p> <strong>5、预防肾功能衰竭</strong></p>
                 <p> 在处理过程中，应随时注意尿量，若每小时尿量少于30ml，应及时补充血容量；少于17ml或无尿时，应考虑有肾功能衰竭的可能，可用20%甘露醇250ml快速静脉滴注，或速尿40mg静脉推注，必要时可重复使用，一般多能于1～2日内恢复。经处理尿量在短期内不见增加，血尿素氮、肌酐、血钾等明显增高，CO2结合力下降，提示肾功能衰竭情况严重，出现尿毒症，此时应进行透析疗法，以抢救产妇生命。</p>
                 <p> <strong>胎盘早剥中医治疗</strong></p>
                 <p> 中药治疗：中医认为生殖器念珠菌病是由于湿热在体内蕴结，加上外受毒邪所致。湿热是内因，而毒邪是外因，内因、外因相互作用使病情缠绵。日久湿热之邪必然要伤阴，出现阴伤、湿热阻滞的虚实夹杂的证候。中医治病特别注意不同的证候和不同的体质，给予不同的药物。一般讲，生殖器念珠菌病是以阴痒、白带增多为主要特征的一种疾病，故中医又称本病为带下病、阴痒病，临床上常根据白带的量、色、气味及全身状况予以辨证施治。</p>
                 <p> 湿热蕴结证生殖器念珠菌病主要表现为阴痒，带下量多，如豆渣样，常伴有心烦，失眠，脘腹胀满，舌红苔黄腻，脉弦滑。这是由于患者湿热内蕴，下注肝胆之经脉，湿热生虫，虫蚀阴中，故出现阴痒和带下量多等症状。治疗宜清热利湿，杀虫止痒。常有方剂如下：石菖蒲，黄柏，茯苓，白术，车前子，鹤虱，苦参，白鲜皮，贯众。本方以川萆?、石菖蒲、茯苓、车前子、黄柏清热除湿，以鹤虱、苦参、白鲜皮、贯众杀虫止痒。如果患者有脾虚症状，如饮食不香，大便不成形等，可加入山药，白术，苍术。</p>
                 <p> 湿毒蕴结证生殖器念珠菌病主要症状为带下量多，色黄白，如豆渣样，有臭味，或带下夹有血丝，阴部瘙痒，甚至红肿，溃烂，尿频、尿急、尿痛，大便不爽，舌苔白腻，脉滑。这是由于湿热之邪蕴结日久，致使生虫成毒。湿毒蕴结伤及阴部出现诸多症状。治疗宜清热除湿、解毒止痒。常有方剂为止带方加减：茯苓，猪苓，泽泻，车前子，茵陈，白鲜皮，鹤虱，蚤休，野菊花，白花蛇舌草。方中以茯苓、猪苓、泽泻、车前子、茵陈等清热除湿，白鲜皮、鹤虱杀虫止痒，蚤休、野菊花、白花蛇舌草清热解毒。如患者伴有尿频、尿急、尿痛等症状可加入木通，滑石。<br> <br> (仅供参考，详细请询问医生)</p>
                 <p> &nbsp;</p>
               </div>
            </el-collapse-item>
            <el-collapse-item>
              <template slot="title">
                病因
              </template>
              <div class=" jib-articl fr f14 jib-lh-articl">
                 <strong class="fb db f20 fYaHei fb jib-articl-tit tc"> 胎盘早剥病因 </strong>
                 <p> </p>
                 <h3> 高血压（<span style="color:#ff0000;">20%</span>）：</h3>
                 <p> 高血压包括妊娠高血压综合征(简称<a href="http://jib.xywy.com/il_sii_2388.htm" target="_blank">妊高征</a>，特别是重度妊高征)，原发性高血压，<a href="http://jib.xywy.com/il_sii_769.htm" target="_blank">慢性肾炎</a>合并高血压，它们是引起胎盘早期剥离的首要病因，有学者研究报道妊娠期高血压者发生胎盘早期剥离较妊娠期血压正常者高5倍，其发病机制主要是胎盘附着部位的底蜕膜螺旋小动脉发生痉挛，急性动脉粥样硬化，引起远端毛细血管缺血，坏死，破裂而出血，形成血肿，逐步扩大，使胎盘与子宫壁剥离而导致胎盘早期剥离，若孕妇原来就有血管病变如原发性高血压再并发妊高征，使血管病变加剧，则发生胎盘早期剥离的机会更多。</p>
                 <h3> 机械性因素（<span style="color:#ff0000;">15%</span>）：</h3>
                 <p> 腹部直接受到撞击，常是胎盘早期剥离的病因，例如汽车的撞击，乘公交车时突然刹车的碰撞，跌跤时腹壁首先着地，殴打等都可导致胎盘早期剥离，外倒转纠正胎位时受阻而用力过大，亦可发生胎盘早期剥离，胎盘位于子宫前壁时，羊膜腔穿刺术也可能导致胎盘早期剥离，其他一些间接因素如<a href="http://jib.xywy.com/il_sii_272.htm" target="_blank">羊水过多</a>突然胚膜破裂时羊水骤然流出，或<a href="http://jib.xywy.com/il_sii_3904.htm" target="_blank">双胎妊娠</a>时第一个胎儿娩出过快，这都可使宫腔内压力骤降，而发生胎盘早期剥离，美国研究资料报道因孕妇外伤所引起的胎盘早期剥离占1%～2%。</p>
                 <h3> 吸烟（<span style="color:#ff0000;">15%</span>）：</h3>
                 <p> 近10年的研究证实了吸烟与胎盘早期剥离的相关性，有报道吸烟使胎盘早期剥离发生危险增加90%，并随着每天吸烟数量的增加胎盘早期剥离发生的危险性也增加，吸烟使血管发生退行性变而增加了毛细血管的脆性，并尼古丁对血管收缩的影响以及血清中一氧化碳结合蛋白浓度升高均可导致血管痉挛缺血，从而诱发胎盘早期剥离。</p>
                 <h3> 胎膜早破（<span style="color:#ff0000;">20%</span>）：</h3>
                 <p> 国内外很多研究报道了胎膜早破与胎盘早期剥离的相关性，胎膜早破孕妇发生胎盘早期剥离的危险性较无胎膜早破者增加3倍，其发生的机制不明确，可能与胎膜早破后伴发绒毛膜羊膜炎有关。</p>
                 <p> 1.滥用可卡因：有报道指出，在妊娠期间滥用可卡因50例孕妇，其中8例死胎是由于胎盘早期剥离引起的，另有报道112例孕妇在孕期滥用可卡因，结果发生胎盘早期剥离者占13%。</p>
                 <p> 2.孕妇年龄及产次：孕妇年龄与胎盘早期剥离发生是相关的，但有学者报道产次比年龄更倾向于与胎盘早期剥离有关，随着产次的增加，发生胎盘早期剥离的危险性呈几何级数增加。</p>
                 <p> 3.其他：孕妇长期仰卧或半卧位，使增大的子宫压迫下腔静脉，阻碍静脉回液，导致蜕膜层静脉淤血或破裂引起部分或全部胎盘剥离，脐带过短或脐带绕颈，绕体，在分娩过程中胎先露下降，脐带长度不足而被强力牵引，也可以导致胎盘早期剥离。</p>
                 <p> <b>发病机制</b></p>
                 <p> 胎盘早期剥离的发病机制尚未完全阐明，过去通常认为与血管病变，机械性因素，子宫静脉压突然升高等因素有关。</p>
                 <p> 胎盘早期剥离的主要病理变化是底蜕膜出血，形成血肿，使胎盘自附着处剥离，若剥离面积小，出血停止后血液很快凝固，临床多无症状，只是凝血块压迫胎盘，在胎盘母体面上遗留一压迹，往往于产后检查胎盘时方发现;若剥离面积大，继续出血形成胎盘后血肿，使胎盘剥离部分不断扩大，此时因胎儿尚未娩出，子宫不能收缩，故不能起止血作用，出血不断增多，可冲破胎盘边缘，沿胎膜与子宫壁之间经宫颈管向外流出，即为显性剥离(revealed abruption)或外出血，若胎盘边缘仍附着于子宫壁上，或胎膜与子宫壁未分离，或胎头固定于骨盆入口，都能使胎盘后血液不能外流，胎盘后血肿逐渐增大，胎盘剥离面也随之扩大，宫底不断升高，即为隐性剥离(conealed abruption)或内出血，当隐性出血<a href="http://jib.xywy.com/il_sii_8536.htm" target="_blank">积聚</a>过多时，血液仍可冲开胎盘边缘与胎膜而外流，形成混合型出血(mixed hemorrhage)，有时出血可透过羊膜进入羊水中成为血性羊水。</p>
                 <p> 隐性胎盘早期剥离，血液不能外流，出血逐渐增多而形成胎盘后血肿，因之压力增加，使血液浸入子宫肌层，引起肌纤维分离，断裂，变性，血液浸入甚至可达浆膜层，子宫表面呈现紫色瘀斑，严重时整个子宫呈紫铜色，尤以胎盘附着处为著，称子宫胎盘卒中(uteroplacental apoplexy)，此时肌纤维受血液浸渍，收缩力减弱，有可能发生产后大出血，有时血液还可渗入腹腔，也可浸润至阔韧带，输卵管等处。</p>
                 <p> 严重的胎盘早期剥离，尤其<a href="http://jib.xywy.com/il_sii_4719.htm" target="_blank">胎死宫内</a>病例可以发生凝血功能障碍，剥离处的坏死胎盘绒毛和蜕膜组织，释放大量组织凝血活酶进入母体循环，激活凝血系统导致DIC，肺，肾等脏器的毛细血管内均可有微<a href="http://jib.xywy.com/il_sii_4450.htm" target="_blank">血栓形成</a>，引起脏器损害，血小板及纤维蛋白原等凝血因子大量损耗，最终激活纤维蛋白溶解系统，产生大量纤维蛋白降解产物(FDP)，继而引发纤溶亢进，加剧凝血功能障碍。</p>
                 <p></p>
              </div>
            </el-collapse-item>
            <el-collapse-item>
              <template slot="title">
                预防
              </template>
            </el-collapse-item>
            <el-collapse-item>
              <template slot="title">
                护理
              </template>
            </el-collapse-item>
          </el-collapse>
        </el-card>
        <!-- <p>
          对应的论文:
        </p> -->
      </section>
    </el-col>
    <el-col :sm="8" :xs="24">
      <div class="relative">
        <h3>
          相关疾病:
        </h3>
        <div>
          <el-tag type="primary">标签三</el-tag>
          <el-tag type="primary">标签三</el-tag>
          <el-tag type="primary">标签三</el-tag>
          <el-tag type="primary">标签三</el-tag>
          <el-tag type="primary">标签三</el-tag>
          <el-tag type="primary">标签三</el-tag>
          <el-tag type="primary">标签三</el-tag>
          <el-tag type="primary">标签三</el-tag>
        </div>
        <h3>
          相关症状：
        </h3>
        <p>
          sdfdsf
        </p>
        <h3>
          相关药品：
        </h3>
      </div>
    </el-col>
  </el-row>

</div>
</template>
<script>
export default {
  data() {
    return {
      params: '',
      input: '',
      abstractContent: ' 妊娠20周后或分娩期，正常位置的胎盘在胎儿娩出前，部分或全部从子宫壁剥离，称为胎盘早剥（placental abruption），胎盘早剥是妊娠晚期的一种严重并发症，短训班起病急、进展快，若处理不及时，可危及母儿生命。国内报道的发生率为4.6‰～21‰，国外的发生率为5.1‰～23.3‰。发生率高低与分娩后是否仔细检查胎盘有关。有些轻型胎盘早剥于临产前可无明显症状，只在产后检查胎盘时，发现早剥处有凝血块压迹，此类患者易被忽略。',
      name: '胎盘早剥',
      susceptiblePopulation: '孕妇',
      treatmentCycle: '2周',
      infectionMode: '无传染性',
      isInsurance: '否',
      recoveryRate: '70-80%',
      departments: '妇产科 妇科',
      treatmentCost: '根据不同医院，收费标准不一致，市三甲医院约（3000——5000元）',
      sicknessRate: '孕妇发病率约10%'
    }
  },
  mounted() {
    this.params = this.$route.params.query;
    this.input = this.params;
  }
}
</script>
<style scoped>
ul,li,h2,dl,dt {
  margin: 0;
  padding: 0;
}

.header {
  top: 0px;
  left: 0px;
  right: 0px;
  position: fixed;
  width: 100%;
  min-width: 750px;
  padding: 10px 60px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  z-index: 100;
}

#logo img {
  padding-right: 10px;
  width: 40px;
  height: 40px;
  vertical-align: middle;
}

.title {
  margin: 0 10px 0 0;
  font-size: 38px;
  line-height: 1.15;
  font-weight: 400;
  vertical-align: sub;
  color: #333;
}

.content {
  padding: 0px 30px;
  border-left: 1px solid #e1e1e1;
}

.diseaseImage {
  float: left;
  padding: 12px 0px;
}

/*baseinfo*/

div.basic-info {
  font: 12px/1.5 arial, '\5b8b\4f53', sans-serif;
}

.basic-info {
  margin: 20px 0 35px;
  clear: both;
  background: url(http://baike.bdimg.com/static/wiki-lemma/widget/lemma_content/mainContent/basicInfo/img/basicInfo-bg_7819f20.png);
}

.basic-info .basicInfo-block {
  width: 357px;
  float: left;
}

.basic-info .basicInfo-block .basicInfo-item.name {
  width: 90px;
  padding: 0 5px 0 12px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  color: #999;
}

.basic-info .basicInfo-block .basicInfo-item {
  line-height: 26px;
  display: block;
  padding: 0;
  margin: 0;
  float: left;
}

.basic-info .basicInfo-block .basicInfo-item.value {
  zoom: 1;
  color: #333;
  width: 250px;
  float: left;
  position: relative;
}

.basic-info .basicInfo-block .basicInfo-item {
  line-height: 26px;
  display: block;
  padding: 0;
  margin: 0;
  float: left;
}

.cmn-clearfix:after {
  content: '\0020';
  display: block;
  height: 0;
  font-size: 0;
  clear: both;
  overflow: hidden;
  visibility: hidden;
}


.header .el-input {
  width: 480px;
}

.container {
  position: relative;
  top: 61px;
  padding: 0px 0px 30px 50px;
}

.head {
  text-align: center;
  font-size: 20px;
}

p.info {
  line-height: 10px;
  font-size: 15px;
}

.relative {
  border-left: 1px solid #e1e1e1;
  padding-left: 30px;
}

.sub-title {
  display: block;
  clear: both;
  zoom: 1;
  overflow: hidden;
  font-size: 20px;
  border-left: 12px solid #4F9CEE;
  line-height: 24px;
  font-size: 22px;
  font-weight: 400;
  font-family: Microsoft YaHei, SimHei, Verdana;
  margin: 35px 0 15px -10px;
  background: url(http://baike.bdimg.com/static/wiki-lemma/normal/resource/img/paraTitle-line_c5e6d61.png);
  position: relative;
}

.title-text {
  float: left;
  display: block;
  padding: 0 8px 0 18px;
  line-height: 24px;
  font-size: 22px;
  font-weight: 400;
  color: #000;
  background: #fff;
}
</style>
