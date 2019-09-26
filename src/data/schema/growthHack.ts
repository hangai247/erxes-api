const commonTypes = `
  order: Int
  createdAt: Date
`;

export const types = `
  type GrowthHack {
    _id: String!
    name: String!
    stageId: String
    pipeline: Pipeline
    boardId: String
    assignedUserIds: [String]
    closeDate: Date
    description: String
    hackStages: [String]
    priority: String
    reach: Int
    impact: Int
    confidence: Int
    ease: Int
    assignedUsers: [User]
    modifiedAt: Date
    modifiedBy: String
    stage: Stage
    attachments: [Attachment]
    isWatched: Boolean
    formId: String
    scoringType: String
    formSubmissions: JSON
    formFields: [Field]
    ${commonTypes}
  }
`;

export const queries = `
  growthHackDetail(_id: String!): GrowthHack
  growthHacks(
    pipelineId: String
    initialStageId: String
    stageId: String
    skip: Int
    search: String
    assignedUserIds: [String]
    nextDay: String
    nextWeek: String
    nextMonth: String
    noCloseDate: String
    overdue: String
    hackStage: String
    sortField: String
    sortDirection: Int
  ): [GrowthHack]

  growthHacksTotalCount(
    pipelineId: String
    initialStageId: String
    stageId: String
    skip: Int
    search: String
    assignedUserIds: [String]
    nextDay: String
    nextWeek: String
    nextMonth: String
    noCloseDate: String
    overdue: String
    hackStage: String
  ): Int

  growthHacksPriorityMatrix(
    pipelineId: String
    search: String
    assignedUserIds: [String]
    nextDay: String
    nextWeek: String
    nextMonth: String
    noCloseDate: String
    overdue: String
  ): [GrowthHack]
`;

const commonParams = `
  name: String,
  stageId: String,
  assignedUserIds: [String],
  companyIds: [String],
  attachments: [AttachmentInput],
  customerIds: [String],
  closeDate: Date,
  description: String,
  order: Int,
  hackStages: [String],
  priority: String,
  reach: Int,
  impact: Int,
  confidence: Int,
  ease: Int,
`;

export const mutations = `
  growthHacksAdd(${commonParams}): GrowthHack
  growthHacksEdit(_id: String!, ${commonParams}): GrowthHack
  growthHacksChange( _id: String!, destinationStageId: String!): GrowthHack
  growthHacksUpdateOrder(stageId: String!, orders: [OrderItem]): [GrowthHack]
  growthHacksRemove(_id: String!): GrowthHack
  growthHacksWatch(_id: String, isAdd: Boolean): GrowthHack
`;
