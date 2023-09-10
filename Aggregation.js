// Aggregation Operations
//              Aggregation operations process multiple documents and return computed results
//              Group values from multiple documents together.
//              Perform operations on the grouped data to return a single result.
//              Analyze data changes over time.


// To perform aggregation operations, you can use:
// Aggregation pipelines
// , which are the preferred method for performing aggregations.

// Single purpose aggregation methods
// , which are simple but lack the capabilities of an aggregation pipeline

// An aggregation pipeline consists of one or more stages that process documents:
// Each stage performs an operation on the input documents. For example, a stage can filter documents, group documents, and calculate values.
// The documents that are output from a stage are passed to the next stage.
// An aggregation pipeline can return results for groups of documents. For example, return the total, average, maximum, and minimum values.
// Starting in MongoDB 4.2, you can update documents with an aggregation pipeline if you use the stages shown in Updates with Aggregation Pipeline.


// NOTE-Aggregation pipelines run with the db.collection.aggregate() 
// method do not modify documents in a collection, unless the pipeline contains a $merge or $out stage.

// debugger.orders.aggregate([
//     {
//         $match:{size:medium}
//     },
//     {
//         $group:{id:"$name",totalQuantity:{$sum:values}}
//     }
// ])

//*************************EXAMPLE********************
// db.orders.aggregate( [
//     // Stage 1: Filter pizza order documents by pizza size
//     {
//        $match: { size: "medium" }
//     },
//     // Stage 2: Group remaining documents by pizza name and calculate total quantity
//     {
//        $group: { _id: "$name", totalQuantity: { $sum: "$quantity" } }
//     }
//  ] )


// The $match stage:
// Filters the pizza order documents to pizzas with a size of medium.
// Passes the remaining documents to the $group stage.
// The $group stage:
// Groups the remaining documents by pizza name.
// Uses $sum to calculate the total order quantity for each pizza name. The total is stored in the totalQuantity field returned by the aggregation pipeline.



// Single Purpose Aggregation Methods
// The single purpose aggregation methods aggregate documents from a single collection.
//  The methods are simple but lack the capabilities of an aggregation pipeline.
// db.collection.estimatedDocumentCount()
// Returns an approximate count of the documents in a collection or a view.
// db.collection.count()
// Returns a count of the number of documents in a collection or a view.
// db.collection.distinct()
// Returns an array of documents that have distinct values for the specified field.

//             CONS
// An aggregation pipeline has limitations on the value types and the result size.


//   OPTIMIZATION
// Aggregation pipeline operations have an optimization phase which attempts to reshape the pipeline for improved performance.
// Projection Optimization
// The aggregation pipeline can determine if it requires only a subset of the fields in the documents to obtain the results. 
// If so, the pipeline only uses those fields, reducing the amount of data passing through the pipeline.
// $project Stage Placement
// When you use a $project stage it should typically be the last stage in your pipeline, 
// used to specify which fields to return to the client.
// Using a $project stage at the beginning or middle of a pipeline to reduce the number of fields passed to subsequent pipeline stages is unlikely to improve performance,
//  as the database performs this optimization automatically.



// $sort + $match Sequence Optimization
// When you have a sequence with $sort followed by a $match, the $match moves before the $sort to minimize the number of objects to sort.4
//  For example, if the pipeline consists of the following stages:

// { $sort: { age : -1 } },
// { $match: { status: 'A' } }
// During the optimization phase, the optimizer transforms the sequence to the following:
// { $match: { status: 'A' } },
// { $sort: { age : -1 } }


// $redact + $match Sequence Optimization
// When possible, when the pipeline has the $redact stage immediately followed by the $match stage, 
// the aggregation can sometimes add a portion of the $match stage before the $redact stage.
//  If the added $match stage is at the start of a pipeline,
//   the aggregation can use an index as well as query the collection to limit the number of documents that enter the pipeline. See 
// Improve Performance with Indexes and Document Filters
//  for more information.

// For example, if the pipeline consists of the following stages:
// { $redact: { $cond: { if: { $eq: [ "$level", 5 ] }, then: "$$PRUNE", else: "$$DESCEND" } } },
// { $match: { year: 2014, category: { $ne: "Z" } } }
// The optimizer can add the same $match stage before the $redact stage:
// { $match: { year: 2014 } },
// { $redact: { $cond: { if: { $eq: [ "$level", 5 ] }, then: "$$PRUNE", else: "$$DESCEND" } } },
// { $match: { year: 2014, category: { $ne: "Z" } } }
// 



// $project/$unset + $skip Sequence Optimization
// { $sort: { age : -1 } },
// { $project: { status: 1, name: 1 } },
// { $skip: 5 }
// During the optimization phase, the optimizer transforms the sequence to the following:
// { $sort: { age : -1 } },
// { $skip: 5 },
// { $project: { status: 1, name: 1 } }


// $limit + $limit Coalescence
// When a $limit immediately follows another $limit, the two stages can coalesce into a single $limit where the limit amount is the smaller of the two initial limit amounts.
// For example, a pipeline contains the following sequence:
// { $limit: 100 },
// { $limit: 10 }
// Then the second $limit stage can coalesce into the first $limit stage and result in a single $limit stage where the limit amount 10 is the minimum of the two initial limits 100 and 10.
// { $limit: 10 }

// $skip + $skip Coalescence
// When a $skip immediately follows another $skip, the two stages can coalesce into a single $skip where the skip amount is the sum of the two initial skip amounts.
//  For example, a pipeline contains the following sequence:
// { $skip: 5 },
// { $skip: 2 }
// Then the second $skip stage can coalesce into the first $skip stage and result in a single $skip stage where the skip amount 7 is the sum of the two initial limits 5 and 2.
// { $skip: 7 }


// $match + $match Coalescence
// When a $match immediately follows another $match, the two stages can coalesce into a single $match combining the conditions with an $and. For example, a pipeline contains the following sequence:

// { $match: { year: 2014 } },
// { $match: { status: "A" } }

// Then the second $match stage can coalesce into the first $match stage and result in a single $match stage

// { $match: { $and: [ { "year" : 2014 }, { "status" : "A" } ] } }

// $lookup + $unwind Coalescence
// When a $unwind immediately follows another $lookup, and the $unwind operates on the as field of the $lookup, the optimizer can coalesce the $unwind into the $lookup stage. This avoids creating large intermediate documents.

// For example, a pipeline contains the following sequence:

// {
//   $lookup: {
//     from: "otherCollection",
//     as: "resultingArray",
//     localField: "x",
//     foreignField: "y"
//   }
// },
// { $unwind: "$resultingArray"}

// The optimizer can coalesce the $unwind stage into the $lookup stage. If you run the aggregation with explain option, the explain output shows the coalesced stage:

// {
//   $lookup: {
//     from: "otherCollection",
//     as: "resultingArray",
//     localField: "x",
//     foreignField: "y",
//     unwinding: { preserveNullAndEmptyArrays: false }
//   }
// }



// $sort + $skip + $limit Sequence
// A pipeline contains a sequence of $sort followed by a $skip followed by a $limit:

// { $sort: { age : -1 } },
// { $skip: 10 },
// { $limit: 5 }

// The optimizer performs 
// $sort + $limit Coalescence
//  to transforms the sequence to the following:

// {
//    "$sort" : {
//       "sortKey" : {
//          "age" : -1
//       },
//       "limit" : NumberLong(15)
//    }
// },
// {
//    "$skip" : NumberLong(10)
// }

//   **************Aggregation Pipeline Limits************
// Result Size Restrictions
// The aggregate command can either return a cursor or store the results in a collection. 
// Each document in the result set is subject to the 16 megabyte BSON Document Size limit. 
// If any single document exceeds the BSON Document Size limit, the aggregation produces an error.
//  The limit only applies to the returned documents. During the pipeline processing,
//  the documents may exceed this size. The db.collection.aggregate() method returns a cursor by default.

// Memory Restrictions
// Starting in MongoDB 6.0,
//  the allowDiskUseByDefault parameter controls whether pipeline stages that require more than
// //  100 megabytes of memory to execute write temporary files to disk by default.
// If allowDiskUseByDefault is set to true, pipeline stages that require more than 100 
// megabytes of memory to execute write temporary files to disk by default. You can disable writing temporary 
// files to disk for specific 
// find or aggregate commands using the { allowDiskUse: false } option.

// If allowDiskUseByDefault is set to false, pipeline stages that require more than 100 
// megabytes of memory to execute raise an error by default. You can enable writing temporary files 
// to disk for specific find or aggregate using the { allowDiskUse: true } option.

// The 
// $search
//  aggregation stage is not restricted to 100 megabytes of RAM because it runs in a separate process.


// Examples of stages that can write temporary files to disk when allowDiskUse is true are:
// $bucket
// $bucketAuto
// $group
// $setWindowFields
// $sort when the sort operation is not supported by an index
// $sortByCount


// **************************Aggregation Pipeline and Sharded Collections********************************************
// The aggregation pipeline supports operations on sharded collections.
//  This section describes behaviors specific to the aggregation pipeline and sharded collections.



// SQL Terms, Functions, and Concepts

// MongoDB Aggregation    Operators
// WHERE----------------------$match                 
// GROUP BY---------------- $group
// HAVING------------------- $match
// SELECT-------------------$project
// ORDER BY------------------$sort
// LIMIT---------------------- $limit
// SUM()----------------------- $sum
// COUNT()--------------- $sum
//                         $sortByCount 
// join-----------------------$lookup
// SELECT INTO NEW_TABLE-------------- $ out

// --------------https://www.mongodb.com/docs/manual/reference/sql-aggregation-comparison/---------------
                              