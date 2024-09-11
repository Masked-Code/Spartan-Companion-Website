<template>
  <div>
    <UForm :schema="schema" :state="state" class="flex flex-wrap m-2 place-items-center">
      <UFormGroup label="Name" name="block1" eager-validation required class="m-2 ">
        <UInput v-model="state.block1" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Rate" name="block2" eager-validation required class="m-2 ">
        <UInput v-model="state.block2" placeholder="ABC1" size="xl" />
      </UFormGroup>
      <UFormGroup label="Desig" name="block3" eager-validation required class="m-2 ">
        <UInput v-model="state.block3" placeholder="desig" size="xl" />
      </UFormGroup>
      <UFormGroup label="SSN" name="block4" eager-validation required class="m-2 ">
        <UInput v-model="state.block4" placeholder="XXX-XX-XXXX" size="xl" />
      </UFormGroup>
      <UFormGroup label="Duty Status" name="block5" eager-validation required class="m-2 ">
        <USelect v-model="state.block5" placeholder="Select..." :options="dutyStatusOptions" option-attribute="label" size="xl"/>
      </UFormGroup>
      <UFormGroup label="UIC" name="block6" eager-validation required class="m-2 ">
        <UInput v-model="state.block6" placeholder="12345" size="xl" />
      </UFormGroup>
      <UFormGroup label="Ship / Station" name="block7" eager-validation required class="m-2 ">
        <UInput v-model="state.block7" placeholder="Full Name" size="xl" />
      </UFormGroup>
      <UFormGroup label="Promotion Status" name="block8" eager-validation required class="m-2 ">
        <USelect v-model="state.block8" placeholder="Select..." :options="promotionStatusOptions" option-attribute="label" size="xl"/>
      </UFormGroup>
      <UFormGroup label="Date Reported" name="block9" eager-validation required class="m-2 ">
        <UInput v-model="state.block9" placeholder="DATE" size="xl" />
      </UFormGroup>
      <UFormGroup label="Reason For Report" name="block10" eager-validation required class="m-2 ">
        <USelect v-model="state.block10" placeholder="Select..." :options="reasonForReportOptions" option-attribute="label" size="xl"/>
      </UFormGroup>
      <UFormGroup label="Period Of Report" name="block14" eager-validation required class="m-2 ">
        <UPopover :popper="{ placement: 'bottom-start' }">
          <UButton icon="i-heroicons-calendar-days-20-solid" size="xl">
            {{ format(selectedPeriodOfReport.start, 'd MMM, yyy') }} - {{ format(selectedPeriodOfReport.end, 'd MMM, yyy') }}
          </UButton>
          <template #panel="{ close }">
            <div class="flex items-center sm:divide-x divide-gray-200 dark:divide-gray-800">
              <div class="hidden sm:flex flex-col py-4">
                <UButton
                  v-for="(range, index) in periodOfReportRanges"
                  :key="index"
                  :label="range.label"
                  color="gray"
                  variant="ghost"
                  class="rounded-none px-6"
                  :class="[isRangeselectedPeriodOfReport(range.duration) ? 'bg-gray-100 dark:bg-gray-800' : 'hover:bg-gray-50 dark:hover:bg-gray-800/50']"
                  truncate
                  @click="selectPORRange(range.duration)"
                />
              </div>

              <DatePicker v-model="selectedPeriodOfReport" @close="close" />
            </div>
          </template>
        </UPopover>
      </UFormGroup>
      <UFormGroup label="Not Observed Report" name="block16" eager-validation required class="m-2 ">
        <UCheckbox v-model="state.block16" class="m-2"/>
      </UFormGroup>
      <UFormGroup label="Type Of Report" name="block17" eager-validation required class="m-2 ">
        <USelect v-model="state.block17" placeholder="Select..." :options="typeOfReportOptions" option-attribute="label" size="xl"/>
      </UFormGroup>
      <UFormGroup label="Physicl Readiness" name="block20" eager-validation required class="m-2 ">
        <USelect v-model="state.block20" placeholder="Select..." :options="physicalFitnessOptions" option-attribute="label" size="xl"/>
      </UFormGroup>
      <UFormGroup label="Billet Subcatagory" name="block21" eager-validation required class="m-2 ">
        <UInput v-model="state.block21" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Reporting Senior" name="block22" eager-validation required class="m-2 ">
        <UInput v-model="state.block22" placeholder="LAST, F M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Reporting Senior's Grade" name="block23" eager-validation required class="m-2 ">
        <USelect v-model="state.block25" placeholder="Select..." :options="reportingSeniorGradeOptions" option-attribute="label" size="xl"/>
      </UFormGroup>
      <UFormGroup label="Reporting Senior's Desig" name="block24" eager-validation required class="m-2 ">
        <UInput v-model="state.block24" placeholder="1234" size="xl" />
      </UFormGroup>
      <UFormGroup label="Reporting Senior's Title" name="block25" eager-validation required class="m-2 ">
        <USelect v-model="state.block25" placeholder="Select..." :options="reportingSeniorTitleOptions" option-attribute="label" size="xl"/>
      </UFormGroup>
      <UFormGroup label="Reporting Senior's UIC" name="block26" eager-validation required class="m-2 ">
        <UInput v-model="state.block26" placeholder="12345" size="xl" />
      </UFormGroup>
      <UFormGroup label="Reporting Senior's SSN" name="block27" eager-validation required class="m-2 ">
        <UInput v-model="state.block27" placeholder="XXX-XX-XXXX" size="xl" />
      </UFormGroup>
      <UFormGroup label="Command Employment And Command Achievements" name="block28" eager-validation required class="m-2 ">
        <UInput v-model="state.block28" placeholder="COMMAND'S STANDARD ROLE BULLET" size="xl" />
      </UFormGroup>
      <UFormGroup label="Primary, Collateral, And Watchstanding Duties" name="block29" eager-validation required class="m-2 ">
        <UInput v-model="state.block29" placeholder="ROLE NAME & LENGHT - DESCRIPTION - COLL" size="xl" />
      </UFormGroup>
      <UFormGroup label="Date Counseled" name="block30" eager-validation required class="m-2 ">
        <UInput v-model="state.block30" placeholder="DATE PICKER" size="xl" />
      </UFormGroup>
      <UFormGroup label="Counselor" name="block31" eager-validation required class="m-2 ">
        <UInput v-model="state.block31" placeholder="LAST, F M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Signature Of Individual Counseled" name="block32" eager-validation required class="m-2 ">
        <div>Signature</div>
      </UFormGroup>
      <UFormGroup label="Professional Knowledge" name="block33" eager-validation required class="m-2 ">
        <URadioGroup v-model="selectedProfessionalKnowledge" :options="professionalKnowledgeOptions" />
      </UFormGroup>
      <UFormGroup label="Quality Of Work" name="block34" eager-validation required class="m-2 ">
        <URadioGroup v-model="selectedQualityOfWork" :options="qualityOfWorkOptions" />
      </UFormGroup>
      <UFormGroup label="Command or Organizational Climate / Equal Opportunity" name="block35" eager-validation required class="m-2 ">
        <URadioGroup v-model="selectedcooceo" :options="cooceoOptions" />
      </UFormGroup>
      <UFormGroup label="Military Bearing / Character" name="block36" eager-validation required class="m-2 ">
        <URadioGroup v-model="selectedmbc" :options="mbcOptions" />
      </UFormGroup>
      <UFormGroup label="Personal Job Accomplishment / Initiative" name="block37" eager-validation required class="m-2 ">
        <URadioGroup v-model="selectedpjai" :options="pjaiOptions" />
      </UFormGroup>
      <UFormGroup label="Teamwork" name="block38" eager-validation required class="m-2 ">
        <URadioGroup v-model="selectedTeamwork" :options="teamworkOptions" />
      </UFormGroup>
      <UFormGroup label="Leadership" name="block39" eager-validation required class="m-2 ">
        <URadioGroup v-model="selectedLeadership" :options="leadershipOptions" />
      </UFormGroup>
      <UFormGroup label="Individual Trait Average" name="block40" eager-validation required class="m-2 ">
        <div>Average of Above</div>
      </UFormGroup>
      <UFormGroup label="Requested Futures" name="block41" eager-validation required class="m-2 ">
        <UInput v-model="state.block41" placeholder="RATINGS, PROGRRAMS, OTHER" size="xl" />
      </UFormGroup>
      <UFormGroup label="Signature Of Rater" name="block42" eager-validation required class="m-2 ">
        <div>Signature</div>
      </UFormGroup>
      <UFormGroup label="Comments On Performance" name="block43" eager-validation required class="m-2 ">
        <UInput v-model="state.block43" placeholder="INFO" size="xl" />
      </UFormGroup>
      <UFormGroup label="Qualifications / Achievements" name="block44" eager-validation required class="m-2 ">
        <UInput v-model="state.block44" placeholder="INFO" size="xl" />
      </UFormGroup>
      <UFormGroup label="Individial Promotion Recommendation" name="block45" eager-validation required class="m-2 ">
        <UInput v-model="state.block45" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Summary Promotion Recommendation" name="block46" eager-validation required class="m-2 ">
        <UInput v-model="state.block46" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Retention" name="block47" eager-validation required class="m-2 ">
        <USelect v-model="state.block47" placeholder="Select..." :options="retentionOptions" option-attribute="label" size="xl"/>
      </UFormGroup>
      <UFormGroup label="Reporting Senior Address" name="block48" eager-validation required class="m-2 ">
        <UInput v-model="state.block48" placeholder="ADDRESS" size="xl" />
      </UFormGroup>
      <UFormGroup label="Signature Of Senior Rater" name="block49" eager-validation required class="m-2 ">
        <div>Signature</div>
      </UFormGroup>
      <UFormGroup label="Signature Of Reporting Senior" name="block50" eager-validation required class="m-2 ">
        <div>Signature</div>
      </UFormGroup>
      <UFormGroup label="Signature Of Individual Evaluated" name="block51" eager-validation required class="m-2 ">
        <div>Signature</div>
      </UFormGroup>
      <UFormGroup label="Regular Reporting Senior Information" name="block52" eager-validation required class="m-2 ">
        <UInput v-model="state.block52" placeholder="INFO" size="xl" />
      </UFormGroup>

      <UButton type="submit">Submit</UButton>
    </UForm>
  </div>
</template>

<script lang="ts" setup>
import { z } from 'zod'
import { sub, format, isSameDay, type Duration } from 'date-fns'

const periodOfReportRanges = [
  { label: 'Last 7 days', duration: { days: 7 } },
  { label: 'Last 30 days', duration: { days: 30 } },
  { label: 'Last 6 months', duration: { months: 6 } },
  { label: 'Last year', duration: { years: 1 } }
]
const selectedPeriodOfReport = ref({ start: sub(new Date(), { days: 14 }), end: new Date() })
function isRangeselectedPeriodOfReport (duration: Duration) {
  return isSameDay(selectedPeriodOfReport.value.start, sub(new Date(), duration)) && isSameDay(selectedPeriodOfReport.value.end, new Date())
}
function selectPORRange (duration: Duration) {
  selectedPeriodOfReport.value = { start: sub(new Date(), duration), end: new Date() }
}

const dutyStatusOptions = [
  {
    label: 'ACT',
    value: 'act'
  }, {
    label: 'FTS',
    value: 'fts'
  }, {
    label: 'INACT',
    value: 'inact'
  }, {
    label: 'AT/ADSW',
    value: 'atadsw'
  }
]

const reasonForReportOptions = [
  {
    label: 'Periodic',
    value: 'periodic'
  }, {
    label: 'Detatchment Of Individual',
    value: 'detatchmentofindividual'
  }, {
    label: 'Promotion / Frocking',
    value: 'promotionfrocking'
  }, {
    label: 'Special',
    value: 'special'
  }
]

const promotionStatusOptions = [
  {
    label: 'Regular',
    value: 'regular'
  }, {
    label: 'SOMETHING ELSE',
    value: 'idk'
  }, {
    label: 'OTHER',
    value: 'other'
  }, {
    label: 'FIND OUT LATER',
    value: 'findoutlater'
  }
]

const typeOfReportOptions = [
  {
    label: 'Regular',
    value: 'regular'
  }, {
    label: 'Concurrent',
    value: 'concurrent'
  }
]

const physicalFitnessOptions = [
  {
    label: 'Pass',
    value: 'pass',
  }, {
    label: 'Fail',
    value: 'fail',
  }, {
    label: 'Waived',
    value: 'waived',
  }
]

const reportingSeniorGradeOptions = [
  {
    label: 'O-10 ADMIRAL',
    value: 'adm'
  },
  {
    label: 'O-9 VICE ADMIRAL',
    value: 'vadm'
  },
  {
    label: 'O-8 REAR ADMIRAL (UPPER HALF)',
    value: 'radmu'
  },
  {
    label: 'O-7 REAR ADMIRAL (LOWER HALF)',
    value: 'radml'
  },
  {
    label: 'O-6 CAPTAIN',
    value: 'capt'
  },
  {
    label: 'O-5 COMMANDER',
    value: 'cmdr'
  },
  {
    label: 'O-4 LIEUTENANT COMMANDER',
    value: 'lcdr'
  },
  {
    label: 'O-3 LIEUTENANT',
    value: 'lt'
  },
  {
    label: 'O-2 LIEUTENANT JUNIOR GRADE',
    value: 'ltjg'
  },
  {
    label: 'O-1 ENSIGN',
    value: 'ens'
  }
]

const reportingSeniorTitleOptions = [
  {
    label: 'CO',
    value: 'co'
  }, {
    label: 'XO',
    value: 'xo'
  },
  {
    label: 'CMC',
    value: 'cmc'
  },
  {
    label: 'OIC',
    value: 'oic'
  },
  {
    label: 'OTHER',
    value: 'other'
  }
]

const professionalKnowledgeOptions = [{
  value: '0',
  label: 'NOB'
}, {
  value: '1',
  label: 'Below Standards'
}, {
  value: '2',
  label: 'Progressing'
}, {
  value: '3',
  label: 'Meets Standards'
}, {
  value: '4',
  label: 'Above Standards'
}
, {
  value: '5',
  label: 'Greatly Exceeds Standards'
}]

const selectedProfessionalKnowledge = ref('3')

const qualityOfWorkOptions = [{
  value: '0',
  label: 'NOB'
}, {
  value: '1',
  label: 'Below Standards'
}, {
  value: '2',
  label: 'Progressing'
}, {
  value: '3',
  label: 'Meets Standards'
}, {
  value: '4',
  label: 'Above Standards'
}
, {
  value: '5',
  label: 'Greatly Exceeds Standards'
}]

const selectedQualityOfWork = ref('3')

const cooceoOptions = [{
  value: '0',
  label: 'NOB'
}, {
  value: '1',
  label: 'Below Standards'
}, {
  value: '2',
  label: 'Progressing'
}, {
  value: '3',
  label: 'Meets Standards'
}, {
  value: '4',
  label: 'Above Standards'
}
, {
  value: '5',
  label: 'Greatly Exceeds Standards'
}]

const selectedcooceo = ref('3')

const mbcOptions = [{
  value: '0',
  label: 'NOB'
}, {
  value: '1',
  label: 'Below Standards'
}, {
  value: '2',
  label: 'Progressing'
}, {
  value: '3',
  label: 'Meets Standards'
}, {
  value: '4',
  label: 'Above Standards'
}
, {
  value: '5',
  label: 'Greatly Exceeds Standards'
}]

const selectedmbc = ref('3')

const pjaiOptions = [{
  value: '0',
  label: 'NOB'
}, {
  value: '1',
  label: 'Below Standards'
}, {
  value: '2',
  label: 'Progressing'
}, {
  value: '3',
  label: 'Meets Standards'
}, {
  value: '4',
  label: 'Above Standards'
}
, {
  value: '5',
  label: 'Greatly Exceeds Standards'
}]

const selectedpjai = ref('3')

const teamworkOptions = [{
  value: '0',
  label: 'NOB'
}, {
  value: '1',
  label: 'Below Standards'
}, {
  value: '2',
  label: 'Progressing'
}, {
  value: '3',
  label: 'Meets Standards'
}, {
  value: '4',
  label: 'Above Standards'
}
, {
  value: '5',
  label: 'Greatly Exceeds Standards'
}]

const selectedTeamwork = ref('3')

const leadershipOptions = [{
  value: '0',
  label: 'NOB'
}, {
  value: '1',
  label: 'Below Standards'
}, {
  value: '2',
  label: 'Progressing'
}, {
  value: '3',
  label: 'Meets Standards'
}, {
  value: '4',
  label: 'Above Standards'
}
, {
  value: '5',
  label: 'Greatly Exceeds Standards'
}]

const retentionOptions = [
  {
    label: 'Recommended',
    value: 'recommended'
  }, {
    label: 'Not Recommended',
    value: 'notrecommended'
  }
]

const selectedLeadership = ref('3')

const schema = z.object({
  block1: z.string().min(10, 'wrong'), // name
  block2: z.string().min(10, 'wrong'), // rate
  block3: z.string().min(10, 'wrong'), // desig
  block4: z.string().min(10, 'wrong'), // ssn
  block5: z.string().min(10, 'wrong'), // dutyStatus
  block6: z.string().min(10, 'wrong'), // uic
  block7: z.string().min(10, 'wrong'), // shipStation
  block8: z.string().min(10, 'wrong'), // promotionStatus
  block9: z.string().min(10, 'wrong'), // dateReported
  block10: z.string().min(10, 'wrong'), // reasonForReport
  block11: z.string().min(10, 'wrong'), // periodOfReport
  block12: z.string().min(10, 'wrong'), // periodOfReport
  block13: z.string().min(10, 'wrong'), // periodOfReport
  block14: z.string().min(10, 'wrong'), // periodOfReport
  block15: z.string().min(10, 'wrong'), // periodOfReport
  block16: z.boolean(), // notObservedReport
  block17: z.string().min(10, 'wrong'),  // typeOfReportRegular
  block18: z.string().min(10, 'wrong'), // typeOfReportConcurrent
  block19: z.string().min(10, 'wrong'), // blank
  block20: z.string().min(10, 'wrong'), // physicalReadiness
  block21: z.string().min(10, 'wrong'), // billetSubcatagory
  block22: z.string().min(10, 'wrong'), // reportingSenior
  block23: z.string().min(10, 'wrong'), // reportingSeniorGrade
  block24: z.string().min(10, 'wrong'), // reportingSeniorDesig
  block25: z.string().min(10, 'wrong'), // reportingSeniorTitle
  block26: z.string().min(10, 'wrong'), // reportingSeniorUIC
  block27: z.string().min(10, 'wrong'), // reportingSeniorSSN
  block28: z.string().min(10, 'wrong'), // commandEmploymentAndCommandAchievements
  block29: z.string().min(10, 'wrong'), // primaryCollateralAndWatchstandingDuties
  block30: z.string().min(10, 'wrong'), // dateCounseled
  block31: z.string().min(10, 'wrong'), // counselor
  block32: z.string().min(10, 'wrong'), // signatureOfIndividualCounseled
  block33: z.string().min(10, 'wrong'), // professionalKnowledge
  block34: z.string().min(10, 'wrong'), // qualityOfWork
  block35: z.string().min(10, 'wrong'), // commandOrOrganizationalClimateEqualOpportunity
  block36: z.string().min(10, 'wrong'), // militaryBearingCharacter
  block37: z.string().min(10, 'wrong'), // personalJobAccomplishmentInitiative
  block38: z.string().min(10, 'wrong'), // teamwork
  block39: z.string().min(10, 'wrong'), // leadership
  block40: z.string().min(10, 'wrong'), // individualTraitAverage
  block41: z.string().min(10, 'wrong'), // requestedFutures
  block42: z.string().min(10, 'wrong'), // signatureOfRater
  block43: z.string().min(10, 'wrong'), // commentsOnPerformance
  block44: z.string().min(10, 'wrong'), // qualificationsAchievements
  block45: z.string().min(10, 'wrong'), // individialPromotionRecommendation
  block46: z.string().min(10, 'wrong'), // summaryPromotionRecommendation
  block47: z.string().min(10, 'wrong'), // retention
  block48: z.string().min(10, 'wrong'), // reportingSeniorAddress
  block49: z.string().min(10, 'wrong'), // signatureOfSeniorRater
  block50: z.string().min(10, 'wrong'), // signatureOfReportingSenior
  block51: z.string().min(10, 'wrong'), // signatureOfIndividualEvaluated
  block52: z.string().min(10, 'wrong'), // regularReportingSeniorInformation
})

const state = reactive({
  block1: undefined, // name
  block2: undefined, // rate 
  block3: undefined, // desig
  block4: undefined, // ssn
  block5: undefined, // dutyStatus
  block6: undefined, // uic
  block7: undefined, // shipStation
  block8: undefined, // promotionStatus
  block9: undefined, // dateReported
  block10: undefined, // reasonForReport
  block11: undefined, // periodOfReport
  block12: undefined, // periodOfReport
  block13: undefined, // periodOfReport
  block14: undefined, // periodOfReport
  block15: undefined, // periodOfReport
  block16: undefined, // notObservedReport
  block17: undefined, // typeOfReportRegular
  block18: undefined, // typeOfReportConcurrent
  block19: undefined, // blank
  block20: undefined, // physicalReadiness
  block21: undefined, // billetSubcatagory
  block22: undefined, // reportingSenior
  block23: undefined, // reportingSeniorGrade
  block24: undefined, // reportingSeniorDesig
  block25: undefined, // reportingSeniorTitle
  block26: undefined, // reportingSeniorUIC
  block27: undefined, // reportingSeniorSSN
  block28: undefined, // commandEmploymentAndCommandAchievements
  block29: undefined, // primaryCollateralAndWatchstandingDuties
  block30: undefined, // dateCounseled
  block31: undefined, // counselor
  block32: undefined, // signatureOfIndividualCounseled
  block33: undefined, // professionalKnowledge
  block34: undefined, // qualityOfWork
  block35: undefined, // commandOrOrganizationalClimateEqualOpportunity
  block36: undefined, // militaryBearingCharacter
  block37: undefined, // personalJobAccomplishmentInitiative
  block38: undefined, // teamwork
  block39: undefined, // leadership
  block40: undefined, // individualTraitAverage 
  block41: undefined, // requestedFutures 
  block42: undefined, // signatureOfRater
  block43: undefined, // commentsOnPerformance
  block44: undefined, // qualificationsAchievements
  block45: undefined, // individialPromotionRecommendation 
  block46: undefined, // summaryPromotionRecommendation 
  block47: undefined, // retention 
  block48: undefined, // reportingSeniorAddress
  block49: undefined, // signatureOfSeniorRater
  block50: undefined, // signatureOfReportingSenior
  block51: undefined, // signatureOfIndividualEvaluated
  block52: undefined, // regularReportingSeniorInformation
})
</script>

<style>

</style>